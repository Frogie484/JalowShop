import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Оформление заказа | Jalowshop",
  description: "Заполните данные покупателя, адрес и способ оплаты для завершения покупки."
};

export default function CheckoutPage() {
  return (
    <section className="container-shell section-space">
      <div className="max-w-3xl">
        <span className="pill">Checkout</span>
        <h1 className="mt-4 font-display text-5xl font-semibold">Оформление заказа</h1>
        <p className="mt-4 text-stone">
          Минимум полей, понятная структура и прозрачный итог заказа перед оплатой.
        </p>
      </div>
      <div className="mt-10">
        <CheckoutForm />
      </div>
    </section>
  );
}
