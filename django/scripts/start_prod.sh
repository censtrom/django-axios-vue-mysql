#!/bin/bash

cd django
python3 ./manage.py collectstatic --no-input
python3 ./manage.py makemigrations
python3 ./manage.py migrate --no-input
gunicorn --env DJANGO_SETTINGS_MODULE=backend.config.prod backend.wsgi -b 0.0.0.0:8000 -w 2
