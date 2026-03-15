"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/components/cart-provider";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  product,
  selectedColor,
  selectedSize
}: {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
}) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      quantity: 1,
      color: selectedColor ?? product.colors[0],
      size: selectedSize ?? product.sizes[0]
    });
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold text-white",
        isAdded ? "bg-accent" : "bg-ink hover:bg-accentDark"
      )}
    >
      {isAdded ? "Добавлено" : "В корзину"}
    </button>
  );
}

export function OptionSelector({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-stone">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm",
              value === option
                ? "border-accent bg-accent text-white"
                : "border-line bg-white hover:border-accent"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
