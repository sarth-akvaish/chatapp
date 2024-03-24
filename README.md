
# Chat App Documentation

Welcome to the Chat App documentation. This document provides an overview of the Chat App project, its features, technologies used, installation instructions, usage guide, API routes (if applicable), contributing guidelines, license information, and acknowledgements.

## Introduction

The Chat App is a real-time messaging application that allows users to communicate with each other via text messages. It provides features such as private messaging, group chats, online status indication, and message notifications.

## Features

- User authentication and authorization system
- Private messaging between users
- Group chat functionality
- Online status indication
- Message notifications
- User profile management

## Technologies Used

- Frontend:
  - ReactJS
  - Redux (for state management)
  - Socket.io (for real-time communication)
  - Material-UI (for UI components)
- Backend:
  - Node.js
  - Express.js
  - MongoDB (using Mongoose for database interaction)
  - Socket.io (for real-time communication)
- Deployment:
  - Frontend deployed on Netlify
  - Backend deployed on Heroku

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarth-akvaish/chatapp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chatapp
   ```
3. Install dependencies for frontend and backend:
   - Frontend:
     ```bash
     cd client && npm install
     ```
   - Backend:
     ```bash
     cd server && npm install
     ```
4. Create a `.env` file in the `server` directory and add the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secret key for JWT.
5. Start the development servers:
   - Frontend:
     ```bash
     npm start
     ```
   - Backend:
     ```bash
     npm start
     ```

## Usage

1. Register a new user or log in with existing credentials.
2. Navigate to the chat section to view active chats and start new conversations.
3. Send private messages to individual users or join group chats.
4. Receive real-time message updates, online status indications, and message notifications.
5. Manage user profile settings and preferences.

## API Routes (if applicable)

If your project includes backend API routes, describe them here. Include route endpoints, request methods, request/response formats, authentication requirements, and any other relevant information.

### Authentication Routes

- **POST /api/auth/register**
  - Register a new user.
  - Request Body: `{ username, email, password }`
  - Response: `{ success: true, message: 'User registered successfully' }`

- **POST /api/auth/login**
  - Log in an existing user.
  - Request Body: `{ email, password }`
  - Response: `{ success: true, token: 'jwt_token_here' }`

### Chat Routes

Include routes related to chat functionality, such as sending messages, creating group chats, etc.

## Contributing

Contributions are welcome! Fork the repository, create a new branch for your feature or bug fix, and submit a pull request with detailed information about the changes.

