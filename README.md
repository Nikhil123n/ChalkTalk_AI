# ChalkTalk AI 🎓
### AI-Powered Teaching Analytics Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Live%20Beta-green.svg)

> **"Stop guessing how your class went. Start measuring it."**

ChalkTalk AI is a full-stack analytics platform that audits university lectures. It uses multimodal AI to quantify **"Active Teaching"** (board usage, gesturing, Socratic questioning) vs. **"Passive Delivery"** (reading off slides).


![Problem Statement](./frontend/public/assets/problem-statement.png)
*Highlighting the "Death by PowerPoint" crisis in education.*

---

![Landing Page](./frontend/public/assets/landing-preview.png)
*Modern landing page ensuring a premium first impression.*

---


![Dashboard Analytics](./frontend/public/assets/dashboard-preview.png)
*AI-driven analysis of a lecture, showing engagement score and timeline.*

---

## ⚡ Key Capabilities
* **Pedagogical Engagement Score (PES):** A unified metric (0-10) rating the lecture's interactivity.
* **Smart Vision Analysis:** Uses **OpenCV** to detect high-motion segments and **Google Gemini 2.5 Flash** to "watch" the professor's delivery.
* **Audio Diagnostics:** Analyzes speech patterns and student engagement cues.
* **Secure Faculty Dashboard:** Private, authenticated access for professors to track their progress over time.
* **Dark/Light Mode:** Full accessibility support.

## 🛠️ Tech Stack
* **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, Recharts.
* **Backend:** Python 3.11+, FastAPI, Motor (Async MongoDB).
* **AI Engine:** Google Gemini 2.5 Flash, OpenCV.
* **Database:** MongoDB Atlas.
* **Infrastructure:** DigitalOcean App Platform (Dockerized).
* **Package Manager:** `uv` (Python), `npm` (Node).

---

## 🏗️ Architecture

[User Upload] -> [Backend API (FastAPI)] -> [Video Processing (OpenCV)] -> [AI Analysis (Gemini 2.5)] -> [MongoDB] -> [Frontend Dashboard (Next.js)]

---

## 🚀 Quick Start (Local Development)

### Prerequisites
* **Node.js** v18+
* **Python** 3.11+
* **uv** (Python Package Manager): [Install uv](https://github.com/astral-sh/uv)
    * `curl -LsSf https://astral.sh/uv/install.sh | sh` (macOS/Linux)
    * `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"` (Windows)
* **MongoDB**: Connection string for MongoDB Atlas.

### 1. Backend Setup
```bash
cd backend

# Install dependencies using uv
uv sync

# Configuration
# Copy the example env file and fill in your details:
cp .env.example .env
# Edit .env and add:
# GOOGLE_API_KEY=your_gemini_api_key
# MONGO_URI=your_mongodb_connection_string
# MONGO_DB_NAME=chalktalk_ai

# Run Server
uv run uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Configuration
# Copy the example env file:
cp .env.local.example .env.local
# (Default is http://127.0.0.1:8000, which is correct for local dev)

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

## 📦 Deployment (DigitalOcean)

This project is configured for **DigitalOcean App Platform** using the included `Dockerfile`.

1.  **Fork this repo.**
2.  Create a new **App** in DigitalOcean.
3.  Connect your GitHub repository and select the `main` branch.
4.  **Environment Variables (CRITICAL):**
    You MUST add the following variables in the DigitalOcean App Settings -> Components -> `chalktalk-ai` -> Environment Variables:
    *   `GOOGLE_API_KEY`: Your Gemini API Key.
    *   `MONGO_URI`: Your Full MongoDB Connection String.
    *   `MONGO_DB_NAME`: `chalktalk_ai` (or your preferred DB name).
    *   `NEXT_PUBLIC_API_URL`: `/api` (Optional, but recommended for explicit routing).

5.  **Deploy:** DigitalOcean will build the Docker container and launch the app.

---

## 🤝 Contributing
Found a bug? Want to add "Tone Analysis"? PRs are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


---

## 👥 Contributors

A huge thanks to the team behind ChalkTalk AI:

*   **[Nikhil Arethiya](https://github.com/Nikhil123n)**
*   **[Sathwik](https://github.com/sathwik0312)**
*   **[Sudharshan Reddy](https://github.com/sudharshanreddyt)**
*   **Diksha Tiwari**

---

## 📄 License
Distributed under the MIT License. See LICENSE for more information.
