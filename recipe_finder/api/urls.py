from django.urls import path
from .views import IngredientListView, IngredientDetailView, RecipeListView, RecipeDetailView


urlpatterns = [
    path('ingredients/', IngredientListView.as_view()),
    path('ingredients/<int:pk>/', IngredientDetailView.as_view()),
    path('recipes/', RecipeListView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
]
