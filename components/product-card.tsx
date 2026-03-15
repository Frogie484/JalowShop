import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/product-controls";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface group overflow-hidden">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#efe7dd]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.isNew ? <span className="pill bg-white">Новинка</span> : null}
            {product.isHit ? <span className="pill bg-white">Хит</span> : null}
            {product.discount ? <span className="pill bg-white">-{product.discount}%</span> : null}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${product.slug}`} className="text-lg font-semibold">
              {product.name}
            </Link>
            <p className="mt-2 text-sm text-stone">{product.shortDescription}</p>
          </div>
          <span className="rounded-full bg-[#f3ede6] px-3 py-1 text-xs font-semibold">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">{formatPrice(product.price)}</div>
            {product.oldPrice ? (
              <div className="text-sm text-stone line-through">
                {formatPrice(product.oldPrice)}
              </div>
            ) : null}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
