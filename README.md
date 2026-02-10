# HealthBridge - Mini Healthcare Support Web App

A simple healthcare support platform built for Jarurat Care's internship assignment. This app helps connect patients with healthcare resources and provides automated FAQ support through a chatbot.

## 🚀 Features

- **Patient Support Form**: Patients, volunteers, and general users can submit inquiries
- **AI-Powered FAQ Chatbot**: Get instant answers to common healthcare questions using keyword-based automation
- **Submissions Dashboard**: View all form submissions with summary statistics
- **Clean & Responsive UI**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** (with Vite) - Fast and modern UI framework
- **React Router** - Client-side routing
- **Vanilla CSS** - Clean, custom styling

### Backend
- **Node.js & Express** - RESTful API server
- **MongoDB** - Database for storing submissions
- **Mongoose** - ODM for MongoDB

## 🤖 AI/Automation Idea

The chatbot uses **keyword-based pattern matching** to automatically respond to common healthcare questions. This helps:
- Reduce response time for frequently asked questions
- Free up staff to handle complex inquiries
- Provide 24/7 support to users

The chatbot can answer questions about:
- Appointment booking
- Volunteering opportunities
- Medicine and prescriptions
- Emergency contacts
- Operating hours
- Insurance coverage
- Lab reports
- Donations

## 🏥 NGO Use-Case

For healthcare NGOs like Jarurat Care, this app provides:
1. **Efficient Triage**: The chatbot handles common questions, allowing staff to focus on critical cases
2. **Volunteer Management**: Easy form for volunteers to express interest
3. **Data Collection**: All submissions are stored and can be analyzed for insights
4. **Accessibility**: Simple interface that works on any device, even in low-resource settings

## 📦 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the server folder:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🌐 Deployment

### Backend
- Can be deployed on **Render**, **Railway**, or **Heroku**
- Make sure to set environment variables in the hosting platform

### Frontend
- Can be deployed on **Vercel** or **Netlify**
- Update the API endpoint in the frontend code to point to your deployed backend

## 📝 API Endpoints

### Contact Form
- `POST /api/contacts` - Submit a new contact form
- `GET /api/contacts` - Get all submissions

### Chatbot
- `POST /api/chatbot` - Send a message and get an automated response

## 👨‍💻 Author

Built by Rajesh Kumar Jha as part of the Jarurat Care internship assignment.

## 📄 License

This project is open source and available for educational purposes.
