import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "aurora-trench",
    name: "Тренч Aurora",
    shortDescription: "Лаконичный тренч с водоотталкивающей пропиткой и поясом.",
    description:
      "Aurora создан для города и путешествий: плотный хлопковый твил держит форму, а удлиненный силуэт легко сочетается как с денимом, так и с платьями-комбинациями.",
    category: "outerwear",
    price: 18990,
    oldPrice: 22990,
    rating: 4.9,
    reviewsCount: 38,
    discount: 17,
    isHit: true,
    colors: ["Песочный", "Графит"],
    sizes: ["XS", "S", "M", "L"],
    specs: [
      { label: "Материал", value: "97% хлопок, 3% эластан" },
      { label: "Подкладка", value: "Вискоза премиум" },
      { label: "Посадка", value: "Свободная" },
      { label: "Сезон", value: "Весна / осень" }
    ],
    images: ["/images/products/aurora-1.svg", "/images/products/aurora-2.svg", "/images/products/aurora-3.svg"]
  },
  {
    id: "2",
    slug: "nord-knit",
    name: "Свитер Nord",
    shortDescription: "Объемный трикотаж из смесовой шерсти с мягкой текстурой.",
    description:
      "Нейтральный оттенок, правильная линия плеч и плотная вязка делают Nord основой капсулы. Комфортно сидит на теле и сохраняет форму после носки.",
    category: "knitwear",
    price: 8490,
    rating: 4.8,
    reviewsCount: 26,
    isNew: true,
    colors: ["Молочный", "Олива", "Карамель"],
    sizes: ["S", "M", "L"],
    specs: [
      { label: "Материал", value: "Шерсть, полиамид, кашемир" },
      { label: "Фактура", value: "Плотная вязка" },
      { label: "Посадка", value: "Relaxed fit" },
      { label: "Уход", value: "Деликатная стирка" }
    ],
    images: ["/images/products/nord-1.svg", "/images/products/nord-2.svg", "/images/products/nord-3.svg"]
  },
  {
    id: "3",
    slug: "linea-bag",
    name: "Сумка Linea",
    shortDescription: "Структурная сумка через плечо из экокожи премиум-класса.",
    description:
      "Linea удерживает форму, аккуратно организует повседневные вещи и выглядит сдержанно дорого. Внутри два отделения и карман на молнии.",
    category: "accessories",
    price: 10990,
    oldPrice: 12990,
    rating: 4.7,
    reviewsCount: 19,
    discount: 15,
    isHit: true,
    colors: ["Черный", "Молочный"],
    sizes: ["One size"],
    specs: [
      { label: "Материал", value: "Премиальная экокожа" },
      { label: "Размер", value: "26 x 18 x 8 см" },
      { label: "Ремень", value: "Регулируемый" },
      { label: "Фурнитура", value: "Матовый металл" }
    ],
    images: ["/images/products/linea-1.svg", "/images/products/linea-2.svg", "/images/products/linea-3.svg"]
  },
  {
    id: "4",
    slug: "sierra-boots",
    name: "Ботинки Sierra",
    shortDescription: "Высокие ботинки на устойчивой подошве для города.",
    description:
      "Sierra собраны вокруг баланса комфорта и графичного вида: плотная подошва амортизирует шаг, а матовая кожа делает модель универсальной.",
    category: "footwear",
    price: 15490,
    rating: 4.9,
    reviewsCount: 44,
    isHit: true,
    colors: ["Черный"],
    sizes: ["36", "37", "38", "39", "40"],
    specs: [
      { label: "Материал", value: "Натуральная кожа" },
      { label: "Подкладка", value: "Байка" },
      { label: "Подошва", value: "Терморезина" },
      { label: "Высота", value: "28 см" }
    ],
    images: ["/images/products/sierra-1.svg", "/images/products/sierra-2.svg", "/images/products/sierra-3.svg"]
  },
  {
    id: "5",
    slug: "halo-shirt",
    name: "Рубашка Halo",
    shortDescription: "Рубашка oversize из хлопка с сухой фактурой.",
    description:
      "Halo подходит для многослойных образов и работает как база круглый год. Свободный крой, аккуратный воротник и удлиненная спинка.",
    category: "knitwear",
    price: 6990,
    rating: 4.6,
    reviewsCount: 14,
    isNew: true,
    colors: ["Белый", "Небесный"],
    sizes: ["XS", "S", "M", "L"],
    specs: [
      { label: "Материал", value: "100% хлопок" },
      { label: "Посадка", value: "Oversize" },
      { label: "Манжеты", value: "На пуговицах" },
      { label: "Длина", value: "Удлиненная" }
    ],
    images: ["/images/products/halo-1.svg", "/images/products/halo-2.svg", "/images/products/halo-3.svg"]
  },
  {
    id: "6",
    slug: "form-belt",
    name: "Ремень Form",
    shortDescription: "Тонкий ремень с матовой пряжкой и чистой линией.",
    description:
      "Form добавляет образу собранность и не перетягивает внимание. Универсальная модель для брюк, пальто и платьев.",
    category: "accessories",
    price: 3990,
    rating: 4.8,
    reviewsCount: 11,
    isNew: true,
    colors: ["Кофейный", "Черный"],
    sizes: ["75", "80", "85", "90"],
    specs: [
      { label: "Материал", value: "Натуральная кожа" },
      { label: "Ширина", value: "2,2 см" },
      { label: "Фурнитура", value: "Сатиновый металл" },
      { label: "Страна производства", value: "Турция" }
    ],
    images: ["/images/products/form-1.svg", "/images/products/form-2.svg", "/images/products/form-3.svg"]
  }
];

export const featuredProducts = products.filter((product) => product.isHit).slice(0, 4);
export const newArrivals = products.filter((product) => product.isNew).slice(0, 4);
