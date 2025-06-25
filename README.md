# SteamTask
 
## Technical Requirements

### Technologies
- **Next.js** & **TypeScript**: The application must be developed using Next.js and TypeScript.

## Features

### Pages
#### 1. Countries Page
#### 2. Country Page
 
## Author

- [Pavel Gordienko](https://github.com/gordienkodev)

## Setup and Running

- Use `node 22.x` or higher.
- Clone this repo: `$ git clone https://github.com/gordienkodev/steam-test.git`. 
- Install dependencies: `$ npm install`.
- Start server: `$ npm run dev`.
- Now you can see web application to the address: `http://localhost:3000/`.

### Build

Builds the app for production to the build folder. It correctly bundles Next in production mode and optimizes the build for the best performance.
 
## Stack

- React
- Next.js
- Typescript
- Tailwindcss
- ESLint
- Prettier
 
## Folder structure

- app – Main application pages.
- components – UI components.


## Screenshots

![image](https://github.com/user-attachments/assets/7513a5fa-09b4-4196-b372-f7497c0161a1)

![image](https://github.com/user-attachments/assets/a3e06df2-38a9-4eab-b3b5-345cda627a80)

 
## Task
 
Скажите пожалуйста, когда вам удобно будет созвониться? Перед нашей встречей, хотел бы уточнить, готовы ли вы будете выполнить совсем небольшое тестовое задание?     
     
Небольшое тестовое задание:     
     
1. Сделать страничку, на которой будет отображаться вертикальный список стран. В строке со страной рисовать Флаг, Название страны, кнопку "удалить" и "подробнее". При нажатии на кнопку удалить, страна должна удаляться из списка с анимацией (см п.2). При нажатии на кнопку "Подробнее" должна отображаться страничка со всей информацией по стране (дизайн произвольный). Использовать NextJs + SSR (загрузка списка стран).
Список стран загружать запросом отсюда:
https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json

2. Анимация. При удалении, удаляемый элемент должен плавно уезжать вправо. Все остальные элементы должны плавно смещаться вверх, заполняя место уделенного элемента.
