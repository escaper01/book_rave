from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="uploads/avatar/%Y/%m/%d/")
    city = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)  # signal used to create a object related to user instance
def create_user_person(sender, instance, created, **kwargs):
    if created:
        Person.objects.create(user=instance)


@receiver(post_save, sender=User)  # signal used to save a object related to user instance
def save_user_person(sender, instance, **kwargs):
    instance.person.save()