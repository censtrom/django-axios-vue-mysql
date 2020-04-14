from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

DATABASES = {'default': env.db('LOCAL_DATABASE_URL'),}
