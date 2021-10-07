from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ShortenItSerializer
from .models import ShortenIt


class UrlDetail(APIView):

    def post(self, request, format=None):
        """Generate shortcode for url and add them to db. Return the url details.
        """
        serializer = ShortenItSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


def shortenit_redirect_view(request, code):
    """Get the full url from db and redirect
    """
    url_data = ShortenIt.objects.filter(shortcode=code)
    url = list(url_data)[0].url
    return redirect(url)
