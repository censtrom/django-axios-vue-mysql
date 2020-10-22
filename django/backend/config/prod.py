from .settings import *

DEBUG = False

ALLOWED_HOSTS = ["*"]

DATABASES = {'default': env.db('PROD_DATABASE_URL'),}

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats-prod.json'),
    }
}