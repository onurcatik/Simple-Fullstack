# React and Django Integration Project

This project demonstrates a simple integration of a React frontend with a Django backend. The application includes user authentication and CRUD operations for managing items.


## Getting Started

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   pip install django djangorestframework djangorestframework-simplejwt corsheaders
   ```

3. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Run the server:**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## Key Features

- **User Authentication:**
  - Register
  - Login
  - Logout

- **CRUD Operations for Items:**
  - Create, Read, Update, Delete Items

## Project Details

### Backend (Django)

- **Models:** Defines the data structure for items.
- **Serializers:** Converts model instances to JSON and vice versa.
- **Views:** Handles API requests for user registration, login, and item management.
- **URLs:** Routes API endpoints.

### Frontend (React)

- **AuthContext:** Manages authentication state and handles login/logout functionality.
- **Login Component:** Provides a login form for users.
- **ItemForm Component:** Provides a form for adding and editing items.
- **App Component:** Displays the login form if the user is not authenticated and the items list with CRUD operations if the user is authenticated.

## Environment Variables

Ensure the following environment variables are set in your Django settings for JWT authentication and CORS configuration:

- `CORS_ORIGIN_WHITELIST = ['http://localhost:3000']`
- `REST_FRAMEWORK['DEFAULT_AUTHENTICATION_CLASSES'] = ['rest_framework_simplejwt.authentication.JWTAuthentication']`

