import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка и оплата | Jalowshop",
  description: "Условия доставки, способы оплаты и правила возврата в Jalowshop."
};

const sections = [
  {
    title: "Доставка",
    text: "По Москве доступны курьерская доставка, экспресс-доставка день в день и примерка в отдельных зонах. По России отправляем крупными логистическими операторами и в пункты выдачи."
  },
  {
    title: "Оплата",
    text: "Принимаем банковские карты, СБП и оплату по ссылке. Для части заказов доступна рассрочка и оплата долями."
  },
  {
    title: "Возврат",
    text: "Возврат возможен в течение 14 дней после получения заказа. Достаточно сохранить бирки, упаковку и товарный вид изделия."
  }
];

export default function ShippingPaymentPage() {
  return (
    <section className="container-shell section-space">
      <span className="pill">Информация</span>
      <h1 className="mt-4 font-display text-5xl font-semibold">Доставка и оплата</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {sections.map((section) => (
          <article key={section.title} className="card-surface p-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 text-stone">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
