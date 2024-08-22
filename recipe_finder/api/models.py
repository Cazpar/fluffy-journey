from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.ManyToManyField('Ingredient', related_name='recipes')
    instructions = models.TextField()
    time = models.IntegerField()
    servings = models.IntegerField()
    image = models.ImageField(upload_to='images/', default='images/None/no-img.jpg')

    def __str__(self):
        return self.title

class Ingredient(models.Model):
    name = models.CharField(max_length=12, unique=True)

    def __str__(self):
        return self.name

