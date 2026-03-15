"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/types";

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "jalowshop-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const isSameLine = (a: CartItem, b: CartItem) =>
      a.productId === b.productId && a.color === b.color && a.size === b.size;

    const addItem = (item: CartItem) => {
      setItems((prev) => {
        const existing = prev.find((entry) => isSameLine(entry, item));

        if (existing) {
          return prev.map((entry) =>
            isSameLine(entry, item) ? { ...entry, quantity: entry.quantity + item.quantity } : entry
          );
        }

        return [...prev, item];
      });
    };

    const removeItem = (item: CartItem) => {
      setItems((prev) => prev.filter((entry) => !isSameLine(entry, item)));
    };

    const updateQuantity = (item: CartItem, quantity: number) => {
      if (quantity <= 0) {
        removeItem(item);
        return;
      }

      setItems((prev) =>
        prev.map((entry) => (isSameLine(entry, item) ? { ...entry, quantity } : entry))
      );
    };

    const clearCart = () => setItems([]);

    return {
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      count: items.reduce((sum, item) => sum + item.quantity, 0)
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
