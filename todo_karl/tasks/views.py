from . import models, serializers
from rest_framework import viewsets

# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    """
    API Endpoint that allows tasks to be viewed or edited.
    """

    queryset = models.Tasks.objects.all()
    serializer_class = serializers.TaskSerializer


class TagViewSet(viewsets.ModelViewSet):
    """
    API Endpoint that allows tags to be viewed or edited.
    """

    queryset = models.Tags.objects.all()
    serializer_class = serializers.TagSerializer
