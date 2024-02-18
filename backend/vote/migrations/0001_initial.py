# Generated by Django 5.0.2 on 2024-02-18 23:03

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comment', '0001_initial'),
        ('review', '0002_rename_description_review_content_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vote_type', models.CharField(choices=[('UP', 'LIKE'), ('DOWN', 'DISLIKE')], max_length=4)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('comment_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='comment.comment')),
                ('review_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='review.review')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
