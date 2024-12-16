export const WEB_APP = "https://dowrybot-front.vercel.app";
export const HEADER = "Чтобы получить кешбэк Вам необходимо ⬇️ ";

export const FIRST_STEP_OFFER =
  "➡️ Для получения списка раздач нажмите" + ' "Dowry раздачи"'.toUpperCase();
export const FIRST_STEP =
  "➡️ Выберите раздачу \n\nЗаказ необходимо оформить в указанное время (на оформление отводится 20-30 минут)";

export const FIRST_STEP_KEY =
  "1️⃣ НАЙТИ товар на wildberries по запросу\n\n" +
  "Ваше ключевое слово для поиска вы увидите после выбора раздачи";
export const FIRST_STEP_LINK = "\n\nПоделитесь сюда ссылкой";
export const FIRST_STEP_A =
  "2️⃣ ✔️Загрузите скриншот поиска нашего товара, где виден ключевой запрос ";
export const FIRST_STEP_CART =
  "3️⃣ ✔️Добавьте наш товар в корзину, а также несколько похожих товаров конкурентов. Перед оформлением заказа необходимо изучить нашу карточку. Товары конкурента необходимо удалить.";
export const FIRST_STEP_C =
  "4️⃣ ✔️Загрузите скриншот с подтверждением факта заказа (на скриншоте должен быть указан адрес ПВЗ)" +
  "❗️Возврат товара на ПВЗ возможен только по браку, иначе кешбек выплачен не будет ";
export const SECOND_STEP =
  '5️⃣ ✔️Загрузите скриншот о получении товара из раздела "Покупки" ';

export const FIVE_STEP =
  "6️⃣ ✔️Загрузите фотографию мелко порванных или закрашенных штрих-кода с упаковки товара и бирки. ";

export const SIX_STEP = "7️⃣ ✔️Чек покупки из личного кабинета ВБ";

export const SIX_STEP_LINK =
  "7️⃣ ✔️Загрузите ссылку на ЧЕК покупки из личного кабинета wildberries (профиль-финансы-вверху справа «эл.чеки» - найти нужный - отправить себе на почту ссылку - скопировать в бот) или скриншот чека, где будет видна покупка (как удобно 🤙)";

export const SEVEN_STEP = "8️⃣ ✔️Загрузите фото товара";

export const FOOTER_DAY =
  "👉 НА 15-17 ДЕНЬ ПОСЛЕ получения товара с ПВЗ или раньше (в зависимости от раздачи) получите кешбэк 💰 на карту Сбербанк или Тинькофф";

export const FOOTER =
  "👉 Переводы осуществляются с понедельника по пятницу с 10.00 до 23.00\n" +
  "👉 Если дата вашего получения выпала на выходные, кешбэк будет начислен в ПН\n" +
  "👉 Если товар заказан и Покупатель не отвечает/не присылает данные в течении 25 дней с даты заказа - кешбэк выплачен не будет\n" +
  "👉 Срок действия раздачи 1 месяц с момента заказа товара\n" +
  "👉 Для проверки факта невозврата товара менеджер дополнительно может запросить видео переход из чата в раздел Покупки\n" +
  "👉 Кешбэк будет выплачен только при соблюдении всех условий инструкции";

export const IMAGES_STEP_FOR_HELP = [
  {
    type: "Выбор раздачи",
    url: ["/images/button-start.jpg"],
    text: FIRST_STEP_OFFER,
  },
  {
    type: "Выбор раздачи",
    url: ["/images/example.jpg"],
    text: FIRST_STEP,
  },
  {
    type: "Артикул правильный",
    url: ["/images/111.jpg"],
    text: FIRST_STEP_KEY + FIRST_STEP_LINK,
  },
  {
    type: "Выбор раздачи",
    url: ["/images/101.jpg"],
    text: FIRST_STEP_A,
  },
  {
    type: "Поиск",
    url: ["/images/1.jpeg"],
    text: FIRST_STEP_CART,
  },
  {
    type: "Заказ",
    url: ["/images/2.jpeg"],
    text: FIRST_STEP_C,
  },
  {
    type: "Получен",
    url: ["/images/4.jpeg"],
    text: SECOND_STEP,
  },
  {
    type: "Получен",
    url: ["/images/shtrih_code.jpg"],
    text: FIVE_STEP,
  },
  {
    type: "Штрих-код",
    url: ["/images/13.jpeg"],
    text: SIX_STEP_LINK,
  },

  {
    type: "Финиш",
    url: ["/images/12.jpg"],
    text: SEVEN_STEP,
  },
  {
    type: "Товар",
    text: FOOTER_DAY + FOOTER,
  },
];
