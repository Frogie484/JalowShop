import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jalowshop.ru",
      lastModified: new Date(),
    },
    {
      url: "https://jalowshop.ru/catalog",
      lastModified: new Date(),
    },
    {
      url: "https://jalowshop.ru/about",
      lastModified: new Date(),
    },
    {
      url: "https://jalowshop.ru/contacts",
      lastModified: new Date(),
    },
    {
      url: "https://jalowshop.ru/shipping-payment",
      lastModified: new Date(),
    },
  ];
}
