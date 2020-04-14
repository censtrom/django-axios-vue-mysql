from .settings import *

DEBUG = False

ALLOWED_HOSTS = ["*"]

DATABASES = {'default': env.db('PROD_DATABASE_URL'),}
