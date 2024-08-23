from django.urls import path
from .views import IngredientListView, IngredientDetailView, RecipeListView, RecipeDetailView, SearchView


urlpatterns = [
    path('ingredients/', IngredientListView.as_view()),
    path('ingredients/<int:pk>/', IngredientDetailView.as_view()),
    path('recipes/', RecipeListView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
    path('search/', SearchView.as_view(), name='search'),
]
