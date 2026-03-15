"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О магазине" },
  { href: "/shipping-payment", label: "Доставка и оплата" },
  { href: "/contacts", label: "Контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div className="rounded-[28px] border border-white/70 bg-white/85 px-5 py-4 shadow-soft backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-stone hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/catalog"
                className="rounded-full border border-line px-5 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
              >
                Смотреть коллекцию
              </Link>
              <Link
                href="/cart"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-accentDark"
              >
                Корзина {count > 0 ? `(${count})` : ""}
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-label="Открыть меню"
              aria-expanded={isOpen}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
              </span>
            </button>
          </div>
          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 lg:hidden",
              isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="min-h-0">
              <div className="flex flex-col gap-3 border-t border-line pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-stone hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Корзина {count > 0 ? `(${count})` : ""}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
