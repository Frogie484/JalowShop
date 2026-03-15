import type { Metadata } from "next";
import { CatalogControls } from "@/components/catalog-controls";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Каталог | Jalowshop",
  description: "Каталог Jalowshop: верхняя одежда, трикотаж, обувь и аксессуары."
};

export default function CatalogPage() {
  return (
    <section className="container-shell section-space">
      <SectionHeading
        eyebrow="Каталог"
        title="Коллекция Jalowshop"
        description="Выбирайте вещи по категории, цене и актуальности. В каталоге собраны модели, которые легко интегрировать в повседневный гардероб."
      />
      <div className="mt-10">
        <CatalogControls />
      </div>
    </section>
  );
}
