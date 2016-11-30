##Установка базы данных

1. show wiki on postresql.org
2. `sudo su postgres` - переход на пользователя postgres
3. `psql` - подключение к командной строке postgresql
4. создаем роль role_name с паролем 'pass'
    
    ```sql
    CREATE ROLE <role_name> WITH password '<pass>';
    ```

5. создаем новую базу данных
    
    ```sql
    CREATE DATABASE <db_name> WITH OWNER <role_name>;
    ```

6. `\dg` - смотрим таблицу пользователей
    если на против созданного пользователя стоит NOLOGIN, то вводим 
    
    ```
    ALTER ROLE <role_name> WITH LOGIN;
    ```

7. `\l` - смотрим на созданные базы данных
8. `Ctrl + D` - выходим из psql
9. проверяем можно ли подключиться к БД с указанной роли

    ```
    psql -h localhost <name_db> <role_name>
    ```

##Установка HEROKU
0. [Читаем документацию](devceter.heroku.com/articles/heroku-command-line)
1. wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
2. heroku --version


##Установка джанго
1. Создаем виртуальное окружение. Возможно сначала надо установить virtualenv и pip:

    ```
    sudo apt-get install python-virtualenv
    sudo apt-get install python-pip
    virtualenv --python=python3 venv
    ```

2. Переходим в виртуальное окружение
    `source venv/bin/activate`

3. Проверяем, что python из виртуального окружения:
    `which python`

4. Устанавливаем зависмости через pip:
   `pip install -r requirements.txt`
   Возможно надо бужет доусстановить:
   `sudo apt install libpq-dev python3-dev`

5. 
    ```
    heroku local migrate
    heroku local loaddata
    heroku local web
    ```

6. Смотрим результат на `http://localhost:5000` в браузере

##Установка frontend
0. Устанавливаем nodejs версии 6+
1. Переходим в папку frontend
2. `npm install`
3. Устанавливаем webpack глобально:
   `sudo npm i -g webpack`
4. Запускаем компилятор webpack.
