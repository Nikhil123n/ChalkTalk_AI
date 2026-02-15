# ChalkTalk AI 🎓
### AI-Powered Teaching Analytics Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Live%20Beta-green.svg)

> **"Stop guessing how your class went. Start measuring it."**

ChalkTalk AI is a full-stack analytics platform that audits university lectures. It uses multimodal AI to quantify **"Active Teaching"** (board usage, gesturing, Socratic questioning) vs. **"Passive Delivery"** (reading off slides).

![Dashboard Preview](./public/dashboard-screenshot.png) *<-- Add your image here*

---

## ⚡ Key Capabilities
* **Pedagogical Engagement Score (PES):** A unified metric (0-100) rating the lecture's interactivity.
* **Smart Vision Analysis:** Uses **OpenCV** to detect high-motion segments and **Google Gemini 2.5 Flash** to "watch" the professor's delivery.
* **Audio Diagnostics:** Analyzes speech patterns and student engagement cues.
* **Secure Faculty Dashboard:** Private, authenticated access for professors to track their progress over time.
* **Dark/Light Mode:** Full accessibility support.

## 🛠️ Tech Stack
* **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, Recharts.
* **Backend:** Python 3.10+, FastAPI.
* **AI Engine:** Google Gemini 2.5 Flash, OpenCV.
* **Database:** MongoDB Atlas.
* **Infrastructure:** DigitalOcean App Platform (Dockerized).

---

## 🏗️ Architecture

[User Upload] -> [Backend API (FastAPI)] -> [Video Processing (OpenCV)] -> [AI Analysis (Gemini 2.5)] -> [MongoDB] -> [Frontend Dashboard (Next.js)]

---

## 🚀 Quick Start (Local Development)

### Prerequisites
* **Node.js** v18+
* **Python** 3.10+
* **MongoDB**: Connection string for MongoDB Atlas.

### 1. Backend Setup
```bash
cd backend

# Install dependencies
pip install -r requirements.txt
# (Core deps: fastapi, uvicorn, google-generativeai, motor, opencv-python, yt-dlp)

# Configuration
# Create a .env file with the following:
# GOOGLE_API_KEY=your_gemini_api_key
# MONGO_URI=your_mongodb_connection_string
# MONGO_DB_NAME=chalktalk_ai

# Run Server
python -m uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Configuration
# Create .env.local:
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
# (Note: In production/DigitalOcean, this should point to your backend URL)

# Run Server
npm run dev
```

### 3. Usage
1. Open [http://localhost:3000](http://localhost:3000).
2. **Sign Up** for an account.
3. **Upload** a lecture video file (`.mp4`) or paste a link.
4. Wait for the analysis pipeline to complete.
5. View your **Executive Summary** and **Heatmap**!

---

## 📦 Deployment

This project is configured for **DigitalOcean App Platform**.

1.  **Fork this repo.**
2.  Create a new **App** in DigitalOcean.
3.  Connect your GitHub repository.
4.  **Environment Variables:** Add `GOOGLE_API_KEY`, `MONGO_URI`, and `MONGO_DB_NAME` in the DigitalOcean settings.
5.  DigitalOcean will automatically detect the Docker configuration (or Python/Node buildpacks) and deploy.

---

## 🤝 Contributing
Found a bug? Want to add "Tone Analysis"? PRs are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See LICENSE for more information.
