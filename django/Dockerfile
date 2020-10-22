# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim-buster

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE 1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED 1

# Add for MySQL
# https://stackoverflow.com/questions/59554493/unable-to-fire-a-docker-build-for-django-and-mysql
RUN apt-get update
RUN apt-get install python3-dev default-libmysqlclient-dev gcc  -y

# Install pip requirements
ADD requirements.txt .
RUN python -m pip install -r requirements.txt
# RUN set -ex \
#     # && apk add --no-cache --virtual .build-deps postgresql-dev build-base \
#     && python -m venv /env \
#     && /env/bin/pip install --upgrade pip \
#     && /env/bin/pip install --no-cache-dir -r /app/requirements.txt \
#     && runDeps="$(scanelf --needed --nobanner --recursive /env \
#         | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
#         | sort -u \
#         | xargs -r apk info --installed \
#         | sort -u)" \
#     && apk add --virtual rundeps $runDeps \
#     && apk del .build-deps

ADD . /app
WORKDIR /app

# Add Frontend Build and Copy from Frontend Dockerfile
# Doing this to try a build without Nginx
# Frontend Build Stage 
# FROM node:12 as build-stage
# WORKDIR /blue/
# COPY ./frontend/package.json /blue/
# RUN npm cache verify
# RUN npm install
# COPY ./frontend /blue/
# RUN npm run build
# #Frontend Productions Stage
# FROM nginx:latest as production-stage
# COPY ./nginx/prod.conf /etc/nginx/nginx.conf
# COPY ./django/static /usr/src/blue/static/
# COPY --from=build-stage /blue/dist /dist/

# Switching to a non-root user, please refer to https://aka.ms/vscode-docker-python-user-rights
RUN useradd appuser && chown -R appuser /app
USER appuser

#Added this
EXPOSE 8000

ENV DJANGO_SETTINGS_MODULE=backend.config.prod

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# File wsgi.py was not found in subfolder:orange. Please enter the Python path to wsgi file.

ENTRYPOINT ["/app/app-entrypoint.sh"]
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "backend.wsgi"]

#Added this
# CMD ["manage.py", "runserver"]