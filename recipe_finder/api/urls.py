from django.urls import path
from .views import IngredientListCreateView, IngredientDetailView, RecipeListCreateView, RecipeDetailView


urlpatterns = [
    path('ingredients/', IngredientListCreateView.as_view()),
    path('ingredients/<int:pk>/', IngredientDetailView.as_view()),
    path('recipes/', RecipeListCreateView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
]
