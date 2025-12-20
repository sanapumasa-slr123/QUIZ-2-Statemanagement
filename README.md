# Mabalacat City Water District Website

A full-stack web application for MCWD with a React frontend and Django backend.

## Setup

### Frontend
```bash
npm install
npm start
```
Frontend runs at `http://localhost:3001`

### Backend
```bash
cd backend
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py load_sample_data
python manage.py runserver
```
Backend runs at `http://localhost:8000`

## Features

- Home, About, and Contact pages
- Services and team member listings
- Contact form with database submission
- Team member profiles with images
- Responsive mobile design

## Tech Stack

- Frontend: React 19, React Router, Bootstrap 5
- Backend: Django 4.2, Django REST Framework
- Database: SQLite3
