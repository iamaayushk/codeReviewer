# Code Reviewer

A full-stack web application for AI-powered code review using Google Gemini API.

## Features
- Paste or write code in the editor and get instant AI-powered code reviews.
- Reviews include suggestions for code quality, best practices, performance, security, and more.
- Modern, responsive UI with syntax highlighting and markdown rendering.
- Built with React (Vite) for the frontend and Node.js/Express for the backend.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, PrismJS, react-simple-code-editor, react-markdown
- **Backend:** Node.js, Express
- **AI Service:** Google Gemini API

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- Google Gemini API key (for backend)

### Setup

#### 1. Clone the repository
```sh
git clone https://github.com/iamaayushk/codeReviewer.git
cd codeReviewer
```

#### 2. Install dependencies
- For the client:
  ```sh
  cd client
  npm install
  ```
- For the server:
  ```sh
  cd ../server
  npm install
  ```

#### 3. Configure Environment Variables
- In `server/.env`, add your Google Gemini API key:
  ```env
  GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
  ```

#### 4. Start the development servers
- Start the backend:
  ```sh
  npm start
  ```
- Start the frontend (in a new terminal):
  ```sh
  cd ../client
  npm run dev
  ```

#### 5. Open the app
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
- Enter your code in the left editor panel.
- Click **Review** to get an AI-generated review in the right panel.
- Use **Clear** to reset the editor and review.

## Folder Structure
```
codeReviewer/
  client/      # React frontend
  server/      # Node.js backend
```

## Customization
- You can update the system prompt for the AI reviewer in `server/src/services/ai.service.js`.
- Frontend styles can be customized in `client/src/App.css`.

## License
MIT

---
Made with ❤️ by Aayush
