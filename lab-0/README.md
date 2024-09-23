# FBI Most Wanted - Story Editor

This is a humorous and fictional VK Mini App designed to let users share an interactive story featuring a "Wanted by the FBI" banner with a random photo and name. The user can create and post the story to their VK profile, adding an element of playful mystery to their social media presence.

## Disclaimer

This project is a joke application and is not related to any official government agency or action. The “wanted” individuals and their details are randomly generated, and the images are sourced from public photo stocks. This app has no real connection to law enforcement or the FBI. It is intended purely for entertainment and to create fictional, playful stories for users to share with their friends.

## Project Description

The project features an editor where users can generate a VK story with the following elements:
- **FBI "Most Wanted" Banner**: A banner labeled "WANTED BY THE FBI" at the top of the story.
- **Random User**: The app fetches a random photo and name from public APIs (such as `randomuser.me`) and uses them to create a fictional wanted poster.
- **VK Story Sharing**: Users can post the generated story to VK with the click of a button, sharing the "wanted" person's details (photo and name) in the story format.

> **Disclaimer**: This project is **purely fictional** and intended for entertainment purposes. All images used are fetched from public photo stock APIs, and the individuals represented are **randomly generated**. This project is not affiliated with the FBI, the United States, or any real-world organizations or actions. Any resemblance to actual persons, living or dead, is purely coincidental, and the project is meant as a joke.

---

## 🚀 Running the Mini App

To start the app, run:

```sh
yarn start



Этот шаблон предоставляет базовый код и настройки для создания мини-приложения внутри ВКонтакте.  
В качестве сборщика проекта выступает [Vite](https://vite-docs-ru.vercel.app/guide/), подробнее про его конфигурацию и дополнительные плагины можно прочитать [здесь](https://vite-docs-ru.vercel.app/config/) и [здесь]().

## 🚀 Запуск мини приложения

Запустите ваш мини апп

```sh
 yarn start
```

Перейдите на [devportal](https://dev.vk.com/ru) или в [управление](https://vk.com/apps?act=manage) и создайте новый мини апп.  
Вставьте URL на котором работает ваше приложение в настройки, предварительно включив режим разработки.
Теперь можете открыть мини апп, нажав на его иконку.
Список всех созданных вами мини приложений вы сможете найти [тут](https://vk.com/apps?act=manage) или [тут](https://dev.vk.com/ru/admin/apps-list).

## 🌐 Деплой мини приложения

Для того чтобы поделиться приложением запущенным на localhost со своими друзьями, вы можете скачать утилиту vk-tunnel и запустить уже подготовленный скрипт из package.json

```sh
yarn global add @vkontakte/vk-tunnel
yarn run tunnel
```

После чего вы получите ссылку, по которой ваше приложение будет доступно с любого устройства, подробнее про vk-tunnel можно прочитать [тут](https://dev.vk.com/ru/libraries/tunnel).

Для того чтобы захостить ваше приложение на сервера ВКонтакте нужно зайти в vk-hosting-config.json и указать id вашего приложения. Далее можно запустить уже подготовленный скрипт:

```sh
yarn run deploy
```

После чего, вы получите бессрочную ссылку на ваш мини апп.

## 🗂️ Предустановленные библиотеки

Мы подготовили для вас набор пакетов, с которыми вам будет легко начать разрабатывать мини аппы
| Пакет | Назначение |
| ------ | ------ |
| [vk-bridge](https://dev.vk.com/ru/mini-apps/bridge) | Библиотека для отправки команд и обмена данными с платформой ВКонтакте. |
| [VKUI](https://vkcom.github.io/VKUI/) | Библиотека React-компонентов для создания мини-приложений в стиле ВКонтакте. |
| [vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react) | Пакет, который даёт возможность использовать события библиотеки VK Bridge в React-приложениях. |
| [vk-mini-apps-router](https://dev.vk.com/ru/libraries/router) | Библиотека для маршрутизации и навигации в мини-приложениях, созданных с помощью VKUI. |
| [icons](https://vkcom.github.io/icons/) | Набор иконок для использования в компонентах VKUI. |
| [vk-miniapps-deploy](https://dev.vk.com/ru/mini-apps/development/hosting) | Пакет для размещения файлов мини-приложения на хостинге ВКонтакте. |
| [eruda](https://www.npmjs.com/package/eruda) | Консоль для мобильного браузера|

## 📎 Полезные ссылки

[Dev портал разработчиков](https://dev.vk.com/ru)  
[Пример мини приложения](https://dev.vk.com/ru/mini-apps/examples/shop)  
[Если столкнулись с проблемами](https://github.com/VKCOM/create-vk-mini-app/issues)
