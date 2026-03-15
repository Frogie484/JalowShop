import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartProvider } from "@/components/cart-provider";
import { ScrollToBottomButton } from "@/components/ScrollToBottomButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://jalowshop.example"),
  title: "Jalowshop",
  description:
    "Jalowshop — премиальный интернет-магазин одежды и аксессуаров с актуальной капсулой, быстрой доставкой и продуманным сервисом.",
  openGraph: {
    title: "Jalowshop",
    description:
      "Современный интернет-магазин Jalowshop: хиты продаж, новинки сезона и эстетичный шопинг-опыт.",
    type: "website",
    locale: "ru_RU",
    siteName: "Jalowshop"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <ScrollToBottomButton />
        </CartProvider>
      </body>
    </html>
  );
}
