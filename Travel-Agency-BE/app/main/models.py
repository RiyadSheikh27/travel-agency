from django.db import models
from ckeditor.fields import RichTextField

class Card(models.Model):
    banner = models.ImageField(upload_to='banners/')
    designation = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    company_logo = models.ImageField(upload_to='company_logos/')
    salary = models.CharField(max_length=50)
    desciption = RichTextField()
    address = models.CharField(max_length=255, null=True, blank=True)
    contact1 = models.CharField(max_length=15)
    contact2 = models.CharField(max_length=15)
    order = models.IntegerField()

    def __str__(self):
        return self.designation

    class Meta:
        ordering = ['order']
        verbose_name = 'Card'
        verbose_name_plural = 'Cards'