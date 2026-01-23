# Company Portal

This is a simple web-based portal for company sign-up and login.

## Files

- `index.html`: Home page with links to sign-up, login, help, and about.
- `signup.html`: Sign-up form page.
- `login.html`: Login form page.
- `about.html`: About page with company information.
- `dashboard.html`: Dashboard page shown after successful login.
- `css/style.css`: Stylesheet for the pages.
- `js/script.js`: JavaScript file for form validation.
- `README.md`: This file.

## How to Use

1. Open `index.html` in your web browser.
2. Click "Sign Up" to go to the registration page or "Login" to go to the login page.
3. Fill out the forms with the required information.
4. Click "Sign Up" or "Login" to submit.

## How to Add a Background Image

To customize the background with your own image:

1. Place your image file (e.g., `background.png`) in the `images/` folder.
2. The CSS is already set up to use `images/background.png` as the background image with a gradient overlay for better text readability.
3. If you want to change the image path, edit `css/style.css` and update the `url()` in the `background` property.

## Features

- Home page with navigation to sign-up, login, help, and about sections.
- Separate pages for sign-up and login with easy navigation.
- Sign-up form with validation (required fields, email format, password confirmation).
- Login form with basic validation.
- Help button displaying contact information.
- About page detailing the company and customer satisfaction.
- Background image support with gradient overlay.
- Links between sign-up and login pages.
- Back to home buttons on each page.
- Stylish gradient background and responsive design.
- Semi-transparent form containers with shadows.

## Backend Setup

This project now includes a simple Node.js backend server for handling form submissions.

### Prerequisites

- Node.js installed on your system.

### Installation

1. Navigate to the project directory.
2. Run `npm install` to install dependencies (Express, body-parser).

### Running the Server

1. Run `npm start` to start the server.
2. Open your browser and go to `http://localhost:3000`.
3. The server serves the static files and handles POST requests for `/signup` and `/login`.

### How It Works

- The server uses in-memory storage for users (for demo purposes; replace with a database for production).
- Signup: Checks for password match and unique email, then stores the user.
- Login: Verifies email and password against stored users, then redirects to the dashboard.
- After successful signup, redirects to login page.
- Dashboard: A simple internal page for logged-in users.

### Next Steps

- Replace in-memory storage with a proper database (e.g., MongoDB, PostgreSQL).
- Add session management and cookies for persistent login.
- Implement password hashing (e.g., using bcrypt).
- Add more routes and features as needed.

## Next Steps

To make this functional:
- Add a backend server (e.g., using Node.js, PHP, or Python) to handle form submissions.
- Store user data in a database.
- Add more fields as needed (e.g., phone number, company position).
- Implement user authentication and account creation.

## Troubleshooting

- If the form doesn't submit, check the browser console for errors.
- Ensure JavaScript is enabled in your browser.