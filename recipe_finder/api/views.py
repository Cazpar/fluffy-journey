from django.shortcuts import render
from rest_framework import generics, status
from .models import Ingredient, Recipe
from .serializers import IngredientSerializer, RecipeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# List View
class IngredientListView(generics.ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    
class RecipeListView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Retrieve, Update, and Delete View
class IngredientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class RecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeCreateView(APIView):
    def post(self, request):
        if not self.request.user.is_authenticated:
            return Response({'message': 'You must be logged in to create a recipe'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IngredientCreateView(APIView):
    def post(self, request):
        if not self.request.user.is_authenticated:
            return Response({'message': 'You must be logged in to create an ingredient'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = IngredientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchView(APIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('q', '')

        # Search for recipes based on title
        recipes = Recipe.objects.filter(title__icontains=query)
        ingredients = Ingredient.objects.filter(name__icontains=query)

        recipe_serializer = RecipeSerializer(recipes, many=True)
        ingredient_serializer = IngredientSerializer(ingredients, many=True)

        return Response({
            'recipes': recipe_serializer.data,
            'ingredients': ingredient_serializer.data
        })
