from django.urls import path
from .views import index

# add frontend urls here
urlpatterns = [
    path('', index),
]
