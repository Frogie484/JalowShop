import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О магазине | Jalowshop",
  description: "История Jalowshop, ценности бренда и подход к подбору коллекций."
};

export default function AboutPage() {
  return (
    <section className="container-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="pill">О магазине</span>
          <h1 className="mt-4 font-display text-5xl font-semibold">
            Jalowshop собирает современный гардероб без визуального шума
          </h1>
        </div>
        <div className="space-y-5 text-stone">
          <p>
            Мы создаем магазин для тех, кто выбирает не случайные тренды, а вещи с
            выверенной формой, приятной фактурой и долгим сроком актуальности.
          </p>
          <p>
            Наша команда тщательно отбирает поставщиков, проверяет материалы и строит
            ассортимент вокруг капсульного подхода: меньше лишнего, больше сочетаний.
          </p>
          <p>
            Jalowshop соединяет эстетику премиального бренда и удобство цифрового
            сервиса: от понятной навигации по каталогу до аккуратной упаковки заказа.
          </p>
        </div>
      </div>
    </section>
  );
}
