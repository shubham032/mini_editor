from django.urls import path
from .views import code_editor, run_code

urlpatterns = [
    path('', code_editor, name='code-editor'),
    path('api/run/', run_code, name='run-code'),
]
