# Generated by Django 4.0.2 on 2022-04-21 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_image',
            field=models.ImageField(default='', upload_to='uploads/'),
        ),
    ]