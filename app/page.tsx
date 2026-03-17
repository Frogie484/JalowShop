import Link from "next/link";
import { FAQList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/data/categories";
import { faqItems } from "@/data/faq";
import { featuredProducts, newArrivals } from "@/data/products";
import { reviews } from "@/data/reviews";

const benefits = [
  "Капсульные коллекции без случайных вещей",
  "Быстрая доставка по России и СНГ",
  "Проверенные ткани и фурнитура премиум-уровня",
  "Помощь со стилем и подбором размера"
];

export default function HomePage() {
  return (
    <>
      <section className="container-shell pb-10">
        <div className="card-surface overflow-hidden bg-hero-glow px-6 py-10 sm:px-10 sm:py-14">
          <div className="hero-copy max-w-4xl">
              <span className="pill animate-rise">Новая капсула весна-лето</span>
              <h1 className="hero-title">
                Jalowshop. Вещи, которые выглядят спокойно, но запоминаются надолго.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone">
                Премиальный онлайн-магазин одежды и аксессуаров для собранного
                гардероба. Продуманные силуэты, честные материалы и визуальная чистота.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white hover:bg-accentDark"
                >
                  Перейти в каталог
                </Link>
                <Link
                  href="#hits"
                  className="rounded-full border border-line px-7 py-4 text-sm font-semibold hover:border-accent hover:text-accent"
                >
                  Смотреть хиты
                </Link>
              </div>
              <div className="mt-10 grid gap-5 border-t border-line/80 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold">12k+</p>
                  <p className="text-sm text-stone">довольных покупателей</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">48 ч</p>
                  <p className="text-sm text-stone">средняя доставка по РФ</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">4.9/5</p>
                  <p className="text-sm text-stone">средняя оценка сервиса</p>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="card-surface grid gap-4 bg-[#1d1a17] px-8 py-8 text-white sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">Special drop</p>
              <h3 className="mt-2 font-display text-4xl font-semibold">
                -15% на аксессуары до конца недели
              </h3>
            </div>
            <Link
              href="/catalog"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink"
            >
              Выбрать
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Категории"
          title="Собранный каталог без лишнего"
          description="Каждая категория отражает подход Jalowshop: универсальные формы, выверенная палитра и вещи, которые легко сочетать между собой."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              href={`/catalog`}
              key={category.id}
              className="card-surface group overflow-hidden p-6"
            >
              <div className={`rounded-[24px] p-6 ${index % 2 === 0 ? "bg-[#efe5d9]" : "bg-[#e7ece8]"}`}>
                <p className="text-sm uppercase tracking-[0.22em] text-stone">0{index + 1}</p>
                <h3 className="mt-10 font-display text-3xl font-semibold">{category.name}</h3>
                <p className="mt-3 text-sm text-stone">{category.description}</p>
                <span className="mt-8 inline-flex text-sm font-semibold group-hover:text-accent">
                  Открыть подборку
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="hits" className="container-shell section-space">
        <SectionHeading
          eyebrow="Хиты продаж"
          title="Самые любимые позиции покупателей"
          description="Товары, которые чаще всего выбирают за посадку, материал и ощущение продуманности в деталях."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="card-surface overflow-hidden px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="pill">Новинки</span>
              <h2 className="mt-4 font-display text-5xl font-semibold">
                Свежие поступления для обновленного гардероба
              </h2>
              <p className="mt-4 text-stone">
                Новая поставка строится вокруг мягких оттенков, спокойной графики и
                вещей, которые сразу работают в реальной жизни.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Почему Jalowshop"
          title="Сервис, который не отвлекает от выбора"
          description="Мы убрали лишние шаги и собрали понятный e-commerce-опыт: легко найти, быстро оформить, приятно получить."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="card-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe5d9] text-lg font-semibold">
                0{index + 1}
              </div>
              <p className="mt-6 text-lg font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Отзывы"
          title="Покупатели возвращаются за ощущением качества"
          description="Нам важно, чтобы заказ выглядел и ощущался как настоящий премиальный сервис, а не просто доставка вещей."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.id} className="card-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-stone">{review.city}</p>
                </div>
                <div className="rounded-full bg-[#f4ece3] px-3 py-1 text-sm font-semibold">
                  {review.rating}.0
                </div>
              </div>
              <p className="mt-4 text-stone">{review.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Ответы на важные вопросы до покупки"
            description="Ключевая информация о доставке, возврате, размере и обслуживании заказа собрана в одном месте."
          />
          <FAQList items={faqItems} />
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="card-surface overflow-hidden bg-[#171512] px-6 py-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="pill border-white/20 bg-white/10 text-white/75">
                Подписка на новости
              </span>
              <h2 className="mt-4 font-display text-5xl font-semibold">
                Ранний доступ к дропам и персональным предложениям
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Без спама и шумных рассылок. Только новые капсулы, приватные скидки и
                полезные подборки от команды Jalowshop.
              </p>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45"
                aria-label="Email для подписки"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
