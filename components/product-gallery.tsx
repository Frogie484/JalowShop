"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="card-surface relative aspect-[4/5] overflow-hidden bg-[#ede4d8]">
        <Image src={activeImage} alt={alt} fill className="object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            type="button"
            key={image}
            onClick={() => setActiveImage(image)}
            className={`card-surface relative aspect-[4/5] overflow-hidden ${
              activeImage === image ? "ring-2 ring-accent" : ""
            }`}
          >
            <Image src={image} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
