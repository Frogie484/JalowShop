import { NextRequest, NextResponse } from "next/server";
import YooKassa from "yookassa";
import { products } from "@/data/products";
import { CartItem } from "@/types";

export const runtime = "nodejs";

type CheckoutPayload = {
  customer: {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    address: string;
    paymentMethod: string;
    deliveryMethod: string;
    comment: string;
  };
  items: CartItem[];
};

export async function POST(request: NextRequest) {
  try {
    const shopId = process.env.YOOKASSA_SHOP_ID;
    const secretKey = process.env.YOOKASSA_SECRET_KEY;

    if (!shopId || !secretKey) {
      return NextResponse.json(
        { error: "Не заданы ключи YooKassa в переменных окружения." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as CheckoutPayload;
    const cartItems = Array.isArray(body.items) ? body.items : [];

    if (cartItems.length === 0) {
      return NextResponse.json(
        { error: "Корзина пуста. Добавьте товары перед оплатой." },
        { status: 400 }
      );
    }

    const orderItems = cartItems
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
          total: product.price * item.quantity
        };
      })
      .filter(
        (
          item
        ): item is CartItem & {
          product: (typeof products)[number];
          total: number;
        } => Boolean(item)
      );

    if (orderItems.length === 0) {
      return NextResponse.json(
        { error: "Не удалось собрать товары для оплаты." },
        { status: 400 }
      );
    }

    const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0);
    const delivery = subtotal > 0 ? 490 : 0;
    const total = subtotal + delivery;

    const yooKassa = new YooKassa({ shopId, secretKey });
    const customerName = body.customer?.fullName?.trim() || "Покупатель";
    const returnUrl = new URL("/checkout/success", request.nextUrl.origin).toString();

    const payment = await yooKassa.createPayment(
      {
        amount: {
          value: total.toFixed(2),
          currency: "RUB"
        },
        confirmation: {
          type: "redirect",
          return_url: returnUrl
        },
        capture: true,
        description: `Заказ Jalowshop для ${customerName}`,
        metadata: {
          customerName,
          phone: body.customer?.phone ?? "",
          email: body.customer?.email ?? "",
          city: body.customer?.city ?? "",
          address: body.customer?.address ?? "",
          deliveryMethod: body.customer?.deliveryMethod ?? "",
          paymentMethod: body.customer?.paymentMethod ?? "",
          items: orderItems
            .map((item) => `${item.product.name} x ${item.quantity}`)
            .join("; ")
        }
      },
      crypto.randomUUID()
    );

    const confirmationUrl = payment.confirmation?.confirmation_url;

    if (!confirmationUrl) {
      return NextResponse.json(
        { error: "YooKassa не вернула ссылку на оплату." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      url: confirmationUrl
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Не удалось создать платеж.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
