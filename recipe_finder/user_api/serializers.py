from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"
    def create(self, clean):
        user_obj = UserModel.objects.create_user(email=clean['email'], password=clean['password'])
        user_obj.username = clean['username']
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'password')
    email = serializers.EmailField()
    password = serializers.CharField()
    def check_user(self, clean_data):
        user = authenticate(email=clean_data['email'], password=clean_data['password'])
        if not user:
            raise serializers.ValidationError('Invalid email or password')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'username')
