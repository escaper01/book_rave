from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.html import mark_safe
from pathlib import Path
import environ
import os


BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env()
environ.Env.read_env()
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="uploads/avatar/%Y/%m/%d/")
    city = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.user.username

    def get_username(self):
        return self.user.username

    def avatar_url(self):
        if self.avatar:
            return mark_safe(f"<img src='{self.avatar.url}' width='100' height='100' />")
        return ""


@receiver(post_save, sender=User)  # signal used to create a object related to user instance
def create_user_person(sender, instance, created, **kwargs):
    if created:
        Person.objects.create(user=instance)


@receiver(post_save, sender=User)  # signal used to save a object related to user instance
def save_user_person(sender, instance, **kwargs):
    instance.person.save()