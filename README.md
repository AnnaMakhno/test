# Тестовое задание

Демо: [https://test-one-psi-32.vercel.app/list](https://test-one-psi-32.vercel.app/list)

## О проекте

Небольшое приложение для ввода и просмотра данных о людях.  
Состоит из двух страниц:

- **Форма** — позволяет ввести имя, email, дату рождения и время встречи с помощью кастомного DatePicker.
- **Список** — отображает все сохранённые записи, а также черновик текущей формы в реальном времени.

## Технологии

- React 18
- Redux Toolkit
- React Router v6
- CSS Modules
- react-datepicker + date-fns
- Vercel (деплой)

## Установка и запуск локально

1. **Клонируйте репозиторий:**

    ```bash
    git clone https://github.com/AnnaMakhno/test
    cd test
    ```

2. **Установите зависимости:**

    ```bash
    npm install
    ```

3. **Запустите проект в режиме разработки:**

    ```bash
    npm run dev
    ```

    Приложение будет доступно по адресу `http://localhost:5173`.

4. **Сборка для продакшена:**
    ```bash
    npm run build
    ```

## Структура

```
src/
├── components/        # Общие компоненты
├── pages/             # Страницы
├── redux/             # Store, слайсы, хуки
├── types/             # TypeScript типы
├── App.tsx            # Роутинг
└── index.tsx          # Точка входа
```
