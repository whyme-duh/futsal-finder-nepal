from rest_framework import serializers
from .models import Futsal


class FutsalModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Futsal
        fields  ="__all__"