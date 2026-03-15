"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/cart-provider";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function CartView() {
  const { items, removeItem, updateQuantity } = useCart();

  const cartItems = useMemo(
    () =>
      items.map((item) => {
        const product = products.find((entry) => entry.id === item.productId)!;
        return { ...item, product, total: product.price * item.quantity };
      }),
    [items]
  );

  const total = cartItems.reduce((sum, item) => sum + item.total, 0);

  if (cartItems.length === 0) {
    return (
      <div className="card-surface p-8 text-center">
        <p className="text-lg font-semibold">Корзина пока пуста</p>
        <p className="mt-2 text-stone">Добавьте товары из каталога, чтобы продолжить.</p>
        <Link
          href="/catalog"
          className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-5">
        {cartItems.map((item) => (
          <article
            key={`${item.productId}-${item.size}-${item.color}`}
            className="card-surface grid gap-4 p-5 sm:grid-cols-[140px_1fr]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#efe5d9]">
              <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.product.name}</h2>
                  <p className="mt-2 text-sm text-stone">
                    {item.color}, {item.size}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item)}
                  className="text-sm text-stone hover:text-red-500"
                >
                  Удалить
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center rounded-full border border-line bg-white">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                    className="px-4 py-2 text-sm"
                    aria-label="Уменьшить количество"
                  >
                    −
                  </button>
                  <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    className="px-4 py-2 text-sm"
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold">{formatPrice(item.total)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="card-surface h-fit p-6">
        <h2 className="text-2xl font-semibold">Итог</h2>
        <div className="mt-6 flex justify-between border-b border-line pb-4">
          <span className="text-stone">Сумма заказа</span>
          <span className="font-semibold">{formatPrice(total)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accentDark"
        >
          Перейти к оформлению
        </Link>
      </aside>
    </div>
  );
}
