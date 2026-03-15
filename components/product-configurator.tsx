"use client";

import { useState } from "react";
import { AddToCartButton, OptionSelector } from "@/components/product-controls";
import { Product } from "@/types";

export function ProductConfigurator({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="mt-8 space-y-6">
      <OptionSelector
        label="Цвет"
        value={selectedColor}
        options={product.colors}
        onChange={setSelectedColor}
      />
      <OptionSelector
        label="Размер"
        value={selectedSize}
        options={product.sizes}
        onChange={setSelectedSize}
      />
      <div className="flex flex-wrap items-center gap-4">
        <AddToCartButton
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
        <p className="text-sm text-stone">Доставка по Москве от 1 дня, возврат 14 дней.</p>
      </div>
    </div>
  );
}
