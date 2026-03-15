import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Корзина | Jalowshop",
  description: "Проверьте выбранные товары и переходите к оформлению заказа."
};

export default function CartPage() {
  return (
    <section className="container-shell section-space">
      <div className="max-w-3xl">
        <span className="pill">Корзина</span>
        <h1 className="mt-4 font-display text-5xl font-semibold">Ваши выбранные товары</h1>
        <p className="mt-4 text-stone">
          Уточните количество и переходите к оформлению заказа. Мы сохранили простой и
          понятный сценарий без лишних шагов.
        </p>
      </div>
      <div className="mt-10">
        <CartView />
      </div>
    </section>
  );
}
