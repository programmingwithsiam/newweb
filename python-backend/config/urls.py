from django.urls import path
from academy.views import courses, health

urlpatterns = [
    path('api/health', health),
    path('api/courses', courses),
]
