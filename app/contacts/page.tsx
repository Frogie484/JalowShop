import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Jalowshop",
  description: "Свяжитесь с Jalowshop: поддержка, шоурум и каналы связи."
};

export default function ContactsPage() {
  return (
    <section className="container-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="pill">Контакты</span>
          <h1 className="mt-4 font-display text-5xl font-semibold">
            Поможем с заказом, размером и подбором вещей
          </h1>
          <p className="mt-4 text-stone">
            Отвечаем каждый день с 10:00 до 21:00 по московскому времени.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card-surface p-6">
            <h2 className="text-xl font-semibold">Поддержка</h2>
            <p className="mt-4 text-stone">hello@jalowshop.ru</p>
            <p className="mt-2 text-stone">+7 (495) 555-41-19</p>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-xl font-semibold">Шоурум</h2>
            <p className="mt-4 text-stone">Москва, Большая Дмитровка, 18</p>
            <p className="mt-2 text-stone">Ежедневно, 11:00–20:00</p>
          </div>
          <div className="card-surface p-6 sm:col-span-2">
            <h2 className="text-xl font-semibold">Социальные каналы</h2>
            <p className="mt-4 text-stone">
              Telegram: @jalowshop
              <br />
              Instagram: @jalowshop.store
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
