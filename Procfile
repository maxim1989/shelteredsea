web: gunicorn shelteredsea.wsgi --log-file -
worker: celery -A shelteredsea worker -B
migrate: python manage.py migrate
loaddata: python manage.py loaddata disputes_games.json
