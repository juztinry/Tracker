# Tracker Application

A full-stack application with authentication using React.js, Express.js, TypeScript, and Supabase.

## Setup Instructions

### 1. Supabase Setup

1. Create an account at [Supabase](https://supabase.com/)
2. Create a new project
3. Get your Supabase URL and anon key from Project Settings > API
4. Run the SQL in `setup_supabase.sql` in the Supabase SQL Editor to set up tables and policies

### 2. Environment Variables

#### Client (.env file in client directory)
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Server (.env file in server directory)
```
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
CLIENT_URL=http://localhost:3000
```

### 3. Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

### 4. Run the Application

#### Backend
```bash
cd server
npm run dev
```

#### Frontend
```bash
cd client
npm start
```

## Features

- User registration and login
- Authentication with Supabase
- Protected routes
- User profiles
- Dashboard with statistics and overview
- Projects management
- Tasks tracking with filtering options
- Responsive design for all screen sizes

## Technologies Used

- Frontend: React.js, TypeScript
- Backend: Express.js, TypeScript
- Database: Supabase (PostgreSQL)
- Authentication: Supabase Auth
