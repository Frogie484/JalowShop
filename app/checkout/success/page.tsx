import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="container-shell section-space">
      <div className="card-surface mx-auto max-w-3xl px-8 py-16 text-center">
        <span className="pill">Оплата</span>
        <h1 className="mt-6 font-display text-5xl font-semibold sm:text-6xl">
          Вы вернулись из платежного окна
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-stone">
          Если оплата прошла успешно, заказ уже создан в YooKassa и будет обработан.
          Если вы закрыли окно или отменили платеж, можно вернуться в checkout и
          попробовать снова.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accentDark"
          >
            На главную
          </Link>
          <Link
            href="/checkout"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            Вернуться к оформлению
          </Link>
        </div>
      </div>
    </section>
  );
}
