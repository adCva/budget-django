# Generated by Django 4.1.7 on 2023-02-19 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expenditure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('desc', models.CharField(blank=True, max_length=240)),
                ('spent', models.IntegerField()),
                ('type', models.CharField(choices=[('HM', 'Home'), ('BL', 'Bill'), ('FD', 'Food'), ('TR', 'Transport'), ('MC', 'Miscellaneous')], default='MC', max_length=2)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='SpendingLimit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField()),
            ],
        ),
    ]