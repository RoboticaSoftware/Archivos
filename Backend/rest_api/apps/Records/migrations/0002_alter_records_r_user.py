# Generated by Django 5.1 on 2024-08-28 15:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Records', '0001_initial'),
        ('Users', '0002_remove_publicusers_unique_document_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='records',
            name='r_user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Users.publicusers'),
        ),
    ]
