from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Service, TeamMember, Testimonial, ContactInquiry
from .serializers import ServiceSerializer, TeamMemberSerializer, TestimonialSerializer, ContactInquirySerializer, APIRoutesSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class ContactInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer


class APIRoutesView(APIView):
    def get(self, request):
        routes = [
            {
                'endpoint': '/api/services/',
                'method': 'GET',
                'description': 'List all active services'
            },
            {
                'endpoint': '/api/services/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific service'
            },
            {
                'endpoint': '/api/team/',
                'method': 'GET',
                'description': 'List all team members'
            },
            {
                'endpoint': '/api/team/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific team member'
            },
            {
                'endpoint': '/api/testimonials/',
                'method': 'GET',
                'description': 'List all testimonials'
            },
            {
                'endpoint': '/api/testimonials/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific testimonial'
            },
            {
                'endpoint': '/api/contact/',
                'method': 'POST',
                'description': 'Submit a contact inquiry'
            },
            {
                'endpoint': '/api/contact/',
                'method': 'GET',
                'description': 'List all contact inquiries'
            },
            {
                'endpoint': '/api/routes/',
                'method': 'GET',
                'description': 'List all available API routes'
            },
        ]
        return Response(routes)
