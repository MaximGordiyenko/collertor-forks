Тестовое задание на позицию Back-end Developer Я заказчик, и я хочу продукт для коллекционеров Вилок ( те что столовые приборы ). Что продукт должен уметь:
Регистрировать новых пользователей
Авторизировать пользователей с помощью JWT и RefreshToken
Позволять авторизованным пользователям:
Получить все вилки ( необходима пагинация )
Получить вилку по айди
Получить все категории вилок ( необходима пагинация )
Получить все вилки из определенной категории ( необходима пагинация )
Создать вилку
Посмотреть все вилки созданные пользователем ( необходима пагинация )
Подписаться на создание новых вилок в категории ( имеется в виду, что если пользователь подписан на создание вилки в категории А, то когда новая вилка будет добавлена в категорию А, то пользователь получит имейл, который задается при регистрации ), но для отправки имейлов необходим отдельный сервис, который будет принимать указы через очередь
Ограничения:
Необходимо использовать реляционную базу данных
Необходим Dockerfile/docker-compose для развертывания продукта одной командой
Необходима документация продукта, но вам решать какой она будет
Необходимо обосновать выбор технологий, которые будут использованы в продукте
Нельзя использовать Passport.js
Уточнения:
Вы можете использовать любой фреймворк/библиотеку для роутинга
Вы можете использовать как JS так и TS, но TS предпочтительнее
Вы можете использовать что угодно для работы с базой данных
Вы можете использовать какой угодно подход, как и REST так и GraphQl или WebSockets
Вы можете делать с базой данных что угодно, главное чтобы продукт обладал необходимым функционалом, описанным выше, и чтобы у таблиц были поля указанные ниже
Обязательные поля сущностей:
Пользователь
Логин
Пароль
Имейл
Вилка
Название
Описание
год создания
юзер, который создал
Категория Вилок
Название
Описание