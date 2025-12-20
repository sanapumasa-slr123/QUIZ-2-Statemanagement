# QUICK START GUIDE

## One-Time Setup

### 1. Install Frontend Dependencies
```bash
cd C:\Users\aguil\AGUILAR
npm install
```

### 2. Backend is Already Set Up
The backend has:
- ✅ Virtual environment created (venv/)
- ✅ Dependencies installed in requirements.txt
- ✅ Database created with migrations
- ✅ Sample data pre-loaded

---

## Running the Application

### Terminal 1: Start Backend API Server
```bash
cd C:\Users\aguil\AGUILAR\backend
.\venv\Scripts\python.exe manage.py runserver
```

**Wait for**: "Starting development server at http://127.0.0.1:8000/"

### Terminal 2: Start Frontend React Server
```bash
cd C:\Users\aguil\AGUILAR
npm start
```

**Wait for**: React app opens at http://localhost:3000

---

## Access the Application

| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend** | http://localhost:3000 | Main web application |
| **Backend API** | http://localhost:8000/api | API endpoints |
| **API Routes** | http://localhost:8000/api/routes/ | API documentation |
| **Django Admin** | http://localhost:8000/admin | Database management |

---

## Test the Integration

### 1. Visit Home Page
- Go to http://localhost:3000
- See services loading from API
- See testimonials loading from API

### 2. Visit About Page
- Click "About" in navigation
- See team members loading from API
- See member photos from Unsplash

### 3. Test Contact Form
- Click "Contact" in navigation
- Fill in the form:
  - Name: John Doe
  - Email: john@example.com
  - Subject: Test Message
  - Message: Testing the API integration
- Click "Send Message"
- See success message
- Check backend at http://localhost:8000/api/contact/ to verify submission

### 4. View API Routes
- Go to http://localhost:8000/api/routes/
- See all 21 available endpoints

### 5. Check Django Admin
- Go to http://localhost:8000/admin
- Login with credentials (if needed)
- Browse Services, Team Members, Testimonials, Contact Inquiries

---

## API Endpoints Reference

### Services
```
GET /api/services/                - List services (4 pre-loaded)
GET /api/services/1/              - Get service with ID 1
```

### Team Members  
```
GET /api/team/                    - List team members (4 pre-loaded)
GET /api/team/1/                  - Get team member with ID 1
```

### Testimonials
```
GET /api/testimonials/            - List testimonials (3 pre-loaded)
GET /api/testimonials/1/          - Get testimonial with ID 1
```

### Contact Inquiries
```
POST /api/contact/                - Submit new contact form
GET /api/contact/                 - List all inquiries
```

---

## Sample Data

### Services (Pre-loaded)
1. Water Supply - 💧
2. Water Testing & Quality Assurance - 🧪
3. Billing & Payment - 📋
4. Customer Support - 🎧

### Team Members (Pre-loaded)
1. Engr. Maria Santos - General Manager
2. Engr. Juan Cruz - Operations Manager
3. Ana Garcia - Finance Director
4. Dr. Ramon Lopez - Quality Assurance Head

### Testimonials (Pre-loaded)
1. Mrs. Patricia Reyes - ⭐⭐⭐⭐⭐
2. Mr. Ferdinand Villareal - ⭐⭐⭐⭐⭐
3. Ms. Christine Soriano - ⭐⭐⭐⭐⭐

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Find process on port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Then restart React server
npm start
```

### Port 8000 Already in Use
```bash
# Run on different port
python manage.py runserver 8001
```

### CORS Errors in Browser Console
- ✅ Backend server must be running on port 8000
- ✅ Check .env CORS_ALLOWED_ORIGINS setting
- ✅ Clear browser cache and reload

### "Module not found" Errors
```bash
# Frontend
npm install

# Backend (if needed)
cd backend
pip install -r requirements.txt
```

### Database Issues
```bash
cd backend
python manage.py migrate
python manage.py load_sample_data
```

---

## File Locations

| Item | Path |
|------|------|
| Frontend Source | `src/` |
| Backend Source | `backend/services/` |
| Frontend Config | `.env` |
| Backend Config | `backend/.env` |
| Database | `backend/db.sqlite3` |
| API Service | `src/services/api.js` |
| Axios Config | `src/config/axiosConfig.js` |
| Django Settings | `backend/mcwd_api/settings.py` |
| Requirements | `backend/requirements.txt` |
| Package.json | `package.json` |

---

## Key Features to Test

✅ **Home Page**
- Services load from API with spinner
- Testimonials load from API with spinner
- Operational highlights display

✅ **About Page**
- Team members load from API
- Professional Unsplash images display
- Fallback initials if image fails

✅ **Contact Page**
- **NEW**: Form now submits to backend!
- Shows loading state during submission
- Shows success message on completion
- Data persists in database

✅ **API Integration**
- All pages fetch real data from backend
- Error handling and user feedback
- Proper CORS configuration
- Loading spinners during requests

---

## Important Notes

1. **Backend Must Run First**: Start Django server before React
2. **Both Terminals Open**: Keep both servers running simultaneously
3. **CORS Configured**: React on 3000, API on 8000 - properly configured
4. **Sample Data Loaded**: No need to add data manually
5. **Git Tracking**: All changes committed to GitHub
6. **Documentation**: See README.md, QUIZ_2_SUMMARY.md, and COMPLETION_REPORT.md for details

---

## Next Steps

### For Testing
1. Start both servers as shown above
2. Test each page and feature
3. Check network tab to verify API calls
4. Verify database has contact submissions

### For Development
1. Edit React components in `src/`
2. Edit Django models in `backend/services/models.py`
3. Run `python manage.py migrate` after model changes
4. Restart servers to load changes

### For Submission
1. Ensure both servers run without errors
2. Verify API endpoints accessible
3. Test contact form submission
4. Check GitHub repository for all files
5. Review documentation files

---

## Support Files

All documentation is included in the repository:
- **README.md** - Full-stack documentation
- **backend/README.md** - Backend setup guide
- **QUIZ_2_SUMMARY.md** - Implementation details
- **FULL_STACK_VERIFICATION.md** - Testing checklist
- **COMPLETION_REPORT.md** - Project summary

---

**Ready to start? Follow the "Running the Application" section above!**

---

**Last Updated**: December 20, 2025
**Status**: ✅ PRODUCTION READY
