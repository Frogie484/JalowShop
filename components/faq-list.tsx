"use client";

import { useState } from "react";
import { FAQItem } from "@/types";

export function FAQList({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.question} className="card-surface px-6 py-5">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span className="text-2xl text-stone">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index ? <p className="mt-4 text-stone">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
