from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterSerializer(serializers.ModelSerializer):

    password1 = serializers.CharField(write_only = True, min_length = 8)
    password2 = serializers.CharField(write_only = True, min_length = 8)

    class Meta:
        model = User
        fields  = ('username', 'password1','password2', 'email' )

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(
                {
                    "password": "Passwords do not match"
                }
            )
        return data
    
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password=validated_data['password1'],
            email = validated_data['email']
        )
        return user