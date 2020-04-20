from django.contrib.auth.models import User, Group
from rest_framework import serializers
from . import models


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Tags
        fields = ["id", "name", "description"]


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Tasks
        fields = ["id", "subject", "notes", "dueDate"]
