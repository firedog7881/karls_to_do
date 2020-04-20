from rest_framework import routers
from tasks import views as task_views

router = routers.DefaultRouter()
router.register(r"tasks", task_views.TaskViewSet)
router.register(r"tags", task_views.TagViewSet)
