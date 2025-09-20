from django.urls import path, include
from . import views
from .views import *
from rest_framework import routers
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('card', CardViewSet, basename='card')

urlpatterns = [
      path('', include(router.urls)),
]