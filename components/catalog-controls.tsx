"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const sortOptions = [
  { value: "popular", label: "Сначала популярные" },
  { value: "price-asc", label: "Сначала дешевле" },
  { value: "price-desc", label: "Сначала дороже" },
  { value: "newest", label: "Сначала новинки" }
];

export function CatalogControls() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("popular");

  const filteredProducts = useMemo(() => {
    const base =
      category === "all" ? products : products.filter((product) => product.category === category);

    return [...base].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
        default:
          return b.rating - a.rating;
      }
    });
  }, [category, sort]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="card-surface h-fit p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
            Категории
          </p>
          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                category === "all" ? "bg-ink text-white" : "bg-[#f5efe8] hover:bg-[#eee5dc]"
              }`}
            >
              Все товары
            </button>
            {categories.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setCategory(item.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                  category === item.id ? "bg-ink text-white" : "bg-[#f5efe8] hover:bg-[#eee5dc]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <label htmlFor="sort" className="mb-3 block text-sm font-semibold text-stone">
            Сортировка
          </label>
          <select
            id="sort"
            className="field"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </aside>
      <div>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-stone">Найдено товаров: {filteredProducts.length}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
