# Funiro

    npm install
    npm run dev        открой http://localhost:5173
    npm run build      проверить сборку

## Картинки (папка public/images)
Замени файлы, названия оставь такие же. В коде они подключены обычными тегами <img src="/images/...">.
Сейчас там маленькие заглушки (цветные квадраты), чтобы сайт открывался сразу.

| Файл | Где |
|---|---|
| logo.svg, avatar.png | шапка, футер |
| search, heart, cart (.svg) | шапка |
| hero-1 ... hero-4 (.png) | слайды hero (934x553) |
| quality, warranty, shipping, support (.svg) | полоска преимуществ |
| product-1 ... product-8 (.png) | карточки товаров (285x301) |
| share.svg, like.svg | иконки при наведении на товар (белые) |
| room-1 ... room-4 (.png) | слайдер комнат (404x582) |
| tip-1 ... tip-4 (.png) | Tips & Tricks (389x248) |
| setup-1 ... setup-9 (.png) | коллаж #FuniroFurniture, по порядку слева направо |
| location.svg, phone.svg, send.svg | футер |

## Папки
    src/
      app/styles/index.css      глобальные стили (цвета, шрифт, .container)
      app/app.jsx
      pages/home/               каждая секция в своей папке: hero/hero.jsx + hero.css
      widgets/                  header, footer
      features/                 subscribe-form
      entities/                 product (карточка товара)
      shared/ui/                button, slider

Правило FSD: папка может брать код только из папок НИЖЕ в списке:
app > pages > widgets > features > entities > shared

\`@\` в импорте = папка src. Файлы index.js не нужны, импортируем файл напрямую.

## Что работает без JavaScript
Выпадающие списки меню (CSS hover), тёмный слой с кнопками на товаре (hover),
проверка email (type="email" required), коллаж (CSS), все адаптивные версии.
JavaScript (useState) есть в шапке (меню на телефоне) и в shared/ui/slider.jsx (3 слайдера).

## TODO
- hero: названия и цены слайдов 2-4 временные
- rooms: названия комнат 3-4 временные
- tips: 4-я карточка временная
- Кнопки и ссылки пока никуда не ведут
