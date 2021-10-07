from rest_framework import serializers
from .models import ShortenIt

class ShortenItSerializer(serializers.ModelSerializer):
    """Convert Python model instance into JSON and vice versa
    """
    class Meta:
        model = ShortenIt
        fields = ('url', 'shortcode', 'updated', 'timestamp', 'active')
