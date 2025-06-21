from django.db import models

# Create your models here.
class Course(models.Model):
    code = models.CharField(max_length=20)  # e.g., GST101, GST102
    title = models.CharField(max_length=100)  # e.g., Use of English

    def __str__(self):
        return self.code


class Question(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    text = models.TextField()

    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)

    correct_answer = models.CharField(max_length=1)  # A, B, C or D

    def __str__(self):
        return f"{self.course.code}: {self.text[:50]}"
