from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = models.CharField(max_length=30, unique=False)
    email = models.EmailField(max_length=255, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __int__(self):
        return self.id

    # def get_full_name(self):
    #     return"%s, %s" % (self.last_name, self.first_name)

    class Meta:
        db_table = "person"
