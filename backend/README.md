# MCWD API Backend

Django REST Framework backend for Mabalacat City Water District website.

## Frontend Setup (React)

The frontend is located in the parent directory. To set up and run the React frontend:

```bash
cd ..
npm install
npm start
```

Frontend runs at `http://localhost:3001`

**Frontend Stack:**
- React 19 (Single Page Application)
- React Router v6 (Navigation)
- Bootstrap 5 + Bootswatch Lux theme (Styling)
- Axios (HTTP client for API communication)

**Frontend Pages:**
- **Home**: Hero section, services listing, testimonials carousel
- **About**: Team member profiles with images
- **Contact**: Contact form that submits to backend API

## Backend Setup

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
