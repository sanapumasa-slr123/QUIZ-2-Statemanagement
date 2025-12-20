# MCWD API Backend

Django REST Framework backend for Mabalacat City Water District website.

## Setup

### Activate Virtual Environment
```bash
venv\Scripts\activate  # Windows
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run Migrations
```bash
python manage.py migrate
```

### Load Sample Data
```bash
python manage.py load_sample_data
```

### Start Server
```bash
python manage.py runserver
```

Server runs at `http://localhost:8000`

## API Endpoints

- `GET /api/services/` - List services
- `GET /api/team/` - List team members
- `GET /api/testimonials/` - List testimonials
- `POST /api/contact/` - Submit contact inquiry
- `GET /api/routes/` - List all endpoints

## Database Models

- **Service**: Service information with icons
- **TeamMember**: Team member profiles with images
- **Testimonial**: Customer testimonials
- **ContactInquiry**: Contact form submissions
