"use client";

import { FormEvent, useMemo, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function CheckoutForm() {
  const { items } = useCart();
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    paymentMethod: "Оплата картой онлайн",
    deliveryMethod: "Курьером по адресу",
    comment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const summary = useMemo(() => {
    const mapped = items.map((item) => {
      const product = products.find((entry) => entry.id === item.productId)!;
      return { ...item, product, total: product.price * item.quantity };
    });

    return {
      items: mapped,
      subtotal: mapped.reduce((sum, item) => sum + item.total, 0),
      delivery: mapped.length > 0 ? 490 : 0
    };
  }, [items]);

  const total = summary.subtotal + summary.delivery;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      setError("Корзина пуста. Добавьте товары перед оплатой.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customer: formState,
          items
        })
      });

      const data = (await response.json()) as { error?: string; url?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Не удалось получить ссылку на оплату.");
      }

      window.location.href = data.url;
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Ошибка при переходе к оплате."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <form className="card-surface p-6 sm:p-8" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <input
            className="field"
            placeholder="Имя и фамилия"
            aria-label="Имя и фамилия"
            required
            value={formState.fullName}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, fullName: event.target.value }))
            }
          />
          <input
            className="field"
            placeholder="Телефон"
            aria-label="Телефон"
            required
            value={formState.phone}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
          <input
            className="field sm:col-span-2"
            placeholder="Email"
            aria-label="Email"
            type="email"
            required
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <input
            className="field sm:col-span-2"
            placeholder="Город"
            aria-label="Город"
            required
            value={formState.city}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, city: event.target.value }))
            }
          />
          <input
            className="field sm:col-span-2"
            placeholder="Адрес доставки"
            aria-label="Адрес доставки"
            required
            value={formState.address}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, address: event.target.value }))
            }
          />
          <select
            className="field"
            aria-label="Способ оплаты"
            value={formState.paymentMethod}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, paymentMethod: event.target.value }))
            }
          >
            <option>Оплата картой онлайн</option>
            <option>Долями при получении</option>
            <option>СБП</option>
          </select>
          <select
            className="field"
            aria-label="Способ доставки"
            value={formState.deliveryMethod}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, deliveryMethod: event.target.value }))
            }
          >
            <option>Курьером по адресу</option>
            <option>Пункт выдачи</option>
            <option>Экспресс-доставка</option>
          </select>
          <textarea
            className="field min-h-28 sm:col-span-2"
            placeholder="Комментарий к заказу"
            aria-label="Комментарий к заказу"
            value={formState.comment}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, comment: event.target.value }))
            }
          />
        </div>
        {error ? <p className="mt-5 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={isSubmitting || items.length === 0}
          className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accentDark disabled:cursor-not-allowed disabled:bg-stone"
        >
          {isSubmitting ? "Переходим к оплате..." : "Подтвердить заказ"}
        </button>
      </form>
      <aside className="card-surface h-fit p-6">
        <h2 className="text-2xl font-semibold">Ваш заказ</h2>
        <div className="mt-6 space-y-4">
          {summary.items.length === 0 ? (
            <p className="text-sm text-stone">Корзина пуста. Добавьте товары из каталога.</p>
          ) : (
            summary.items.map((item) => (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex justify-between gap-4 text-sm">
                <div>
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-stone">
                    {item.color}, {item.size} x {item.quantity}
                  </p>
                </div>
                <p>{formatPrice(item.total)}</p>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
          <div className="flex justify-between">
            <span className="text-stone">Товары</span>
            <span>{formatPrice(summary.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone">Доставка</span>
            <span>{formatPrice(summary.delivery)}</span>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Итого</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
