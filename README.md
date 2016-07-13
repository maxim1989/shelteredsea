# shelteredsea

1) Запустить virtualenv
1.5) heroku login (один раз)

# Запуск локально
2) python manage.py collectstatic
3) heroku local web

# Запуск в интернете
2) heroku ps --app sheltered-sea-35879 (проверить запущен или нет)
3) heroku ps:scale web=1 --app sheltered-sea-35879 (включить)
4) heroku open --app sheltered-sea-35879 (способ открыть браузер
   со страницей)
5) heroku ps:scale web=0 --app sheltered-sea-35879 (выключить)