from django.urls import include, path

urlpatterns = [
    path('user/', include('backend.user.urls')),
    path('rest-auth/', include('rest_auth.urls')),
]