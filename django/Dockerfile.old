FROM python:3.7
ENV PYTHONUNBUFFERED 1
WORKDIR /blue
ADD requirements.txt /blue/
RUN pip3 install -r requirements.txt
COPY /scripts/start_prod.sh /
COPY manage.py /blue/
ADD . /blue/
