from django.db import models

# Create your models here.
class Expenditure(models.Model):
    HOME = 'HM'
    BILL = 'BL'
    FOOD = 'FD'
    TRANSPORT = 'TR'
    MISCELLANEOUS = 'MC'
    TYPES_OF_EXPENDITURES = [
        (HOME, 'Home'),
        (BILL, 'Bill'),
        (FOOD, 'Food'),
        (TRANSPORT, 'Transport'),
        (MISCELLANEOUS, 'Miscellaneous'),
    ]

    name = models.CharField(max_length=40)
    desc = models.CharField(max_length=240, blank=True)
    spent = models.IntegerField()
    type = models.CharField(max_length=2, choices=TYPES_OF_EXPENDITURES, default=MISCELLANEOUS)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name





class SpendingLimit(models.Model):
    total = models.CharField(max_length=240)
    dateLimit = models.CharField(max_length=240, blank=True)

    def __str__(self):
        return self.total