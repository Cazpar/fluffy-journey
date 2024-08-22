from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.ManyToManyField('Ingredient', related_name='recipes')
    instructions = models.TextField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.IntegerField()
    image = models.ImageField(upload_to='images/', default='images/None/no-img.jpg')

    def __str__(self):
        return self.title

class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=100)
    unit = models.CharField(max_length=100)

    def __str__(self):
        return self.name
