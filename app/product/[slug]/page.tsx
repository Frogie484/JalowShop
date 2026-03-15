import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { ProductCard } from "@/components/product-card";
import { reviews } from "@/data/reviews";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ProductConfigurator } from "@/components/product-configurator";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Jalowshop`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Jalowshop`,
      description: product.shortDescription
    }
  };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const productReviews = reviews.filter((review) => review.productSlug === product.slug);

  return (
    <section className="container-shell section-space">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <ProductGallery images={product.images} alt={product.name} />
        <div>
          <span className="pill">{product.category}</span>
          <h1 className="mt-4 font-display text-5xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-lg text-stone">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
            {product.oldPrice ? (
              <span className="pb-1 text-lg text-stone line-through">
                {formatPrice(product.oldPrice)}
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-sm text-stone">
            Рейтинг {product.rating} · {product.reviewsCount} отзывов
          </p>
          <ProductConfigurator product={product} />

          <div className="mt-8 card-surface p-6">
            <h2 className="text-xl font-semibold">Характеристики</h2>
            <dl className="mt-5 space-y-4">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 border-b border-line pb-4 text-sm"
                >
                  <dt className="text-stone">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-4xl font-semibold">Похожие товары</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-4xl font-semibold">Отзывы о товаре</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {productReviews.map((review) => (
            <article key={review.id} className="card-surface p-6">
              <p className="font-semibold">{review.author}</p>
              <p className="mt-1 text-sm text-stone">
                {review.city} · {review.rating}.0/5
              </p>
              <p className="mt-4 text-stone">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
