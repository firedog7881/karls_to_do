from django.db import models

# Create your models here.


class Tags(models.Model):
    name = models.CharField(max_length=20, null=False)
    description = models.TextField(null=False)

    def __str__(self):
        return f"{self.name} - {self.description}"


class Tasks(models.Model):
    subject = models.CharField(max_length=100, null=False)
    notes = models.TextField(null=True)
    dueDate = models.DateField()
    tags = models.ManyToManyField(Tags)

    def __str__(self):
        return f"ID:{self.id},subject:{self.subject},notes:{self.notes},dueDate:{self.dueDate},tags:{self.tags}"
