from django.db import models

class TrackingFieldsMixin(models.Model):
    created_by = models.ForeignKey('user.CustomUser', related_name='created_by_user', on_delete=models.PROTECT)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_by = models.ForeignKey('user.CustomUser', related_name='modified_by_user', on_delete=models.PROTECT)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True