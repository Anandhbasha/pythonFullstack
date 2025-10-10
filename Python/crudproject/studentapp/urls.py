from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_students, name='list_students'),
    path('add/', views.add_students, name='add_students'),
    path('edit/<int:id>/', views.edit_student, name='edit_student'),
    path('delete/<int:id>/', views.delete_student, name='delete_student'),
]
