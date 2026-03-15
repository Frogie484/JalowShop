import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell section-space">
      <div className="card-surface mx-auto max-w-3xl px-8 py-16 text-center">
        <span className="pill">404</span>
        <h1 className="mt-6 font-display text-5xl font-semibold sm:text-6xl">
          Страница не найдена
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-stone">
          Возможно, товар уже закончился или ссылка устарела. Вернитесь в каталог и
          продолжите покупки.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accentDark"
          >
            На главную
          </Link>
          <Link
            href="/catalog"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            Открыть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
