import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-[#f2ebe2]">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-stone">
            Jalowshop создает спокойный и уверенный онлайн-шопинг: капсульные вещи,
            честные материалы и сервис без лишнего шума.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
            Навигация
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="/catalog" className="block hover:text-accent">
              Каталог
            </Link>
            <Link href="/about" className="block hover:text-accent">
              О магазине
            </Link>
            <Link href="/contacts" className="block hover:text-accent">
              Контакты
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
            Сервис
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="/shipping-payment" className="block hover:text-accent">
              Доставка и оплата
            </Link>
            <Link href="/checkout" className="block hover:text-accent">
              Оформление заказа
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
            Контакты
          </h3>
          <div className="mt-4 space-y-3 text-sm text-stone">
            <p>+7 (495) 555-41-19</p>
            <p>hello@jalowshop.ru</p>
            <p>Москва, Большая Дмитровка, 18</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
