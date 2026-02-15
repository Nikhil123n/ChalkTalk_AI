# Deploying ChalkTalk AI to DigitalOcean

This guide explains how to deploy the application on DigitalOcean using Docker and GitHub.

## Option 1: DigitalOcean App Platform (Recommended)

This is the easiest method as it automatically builds and deploys your code directly from GitHub and manages scaling for you.

### 1. Push Code to GitHub
Ensure your code is pushed to a GitHub repository.
```bash
git add .
git commit -m "Add Dockerfiles for deployment"
git push origin main
```

### 2. Create App on DigitalOcean
1.  Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps).
2.  Click **Create App**.
3.  Select **GitHub** as the source.
4.  Choose your repository (`ChalkTalk_AI`).
5.  Select the `main` branch.
6.  Click **Next**.

### 3. Configure Components
DigitalOcean should automatically detect the Dockerfiles. You need to configure two services:

#### **Service 1: Backend**
-   **Name**: `backend`
-   **Source Directory**: `/` (Root of the repository)
-   **Dockerfile Path**: `backend/Dockerfile`
-   **HTTP Port**: `8000`
-   **Environment Variables**:
    -   `GOOGLE_API_KEY`: (Your Google Gemini API Key)
    -   `MONGO_URI`: (See "Database Setup" below)
    -   `MONGO_DB_NAME`: `chalktalk_ai`

#### **Service 2: Frontend**
-   **Name**: `frontend`
-   **Source Directory**: `/frontend`
-   **Dockerfile Path**: `Dockerfile`
-   **HTTP Port**: `3000`
-   **Environment Variables**:
    -   `NEXT_PUBLIC_API_URL`: `${APP_URL}/api` (or the internal backend URL provided by DigitalOcean)

### 4. Database Setup (MongoDB)
Since the App Platform doesn't have a built-in "free tier" MongoDB, you have two options:
1.  **Managed MongoDB**: Add a Database component in DigitalOcean (starts at ~$15/mo).
2.  **External MongoDB**: Use a free MongoDB Atlas cluster ([MongoDB Atlas](https://www.mongodb.com/atlas/database)).
    -   Get the Connection String (URI).
    -   Add it as the `MONGO_URI` environment variable in the backend service.

---

## Option 2: DigitalOcean Droplet (Docker Compose)

This method gives you a full virtual machine (VPS) where you can run `docker-compose`.

### 1. Create a Droplet
1.  Create a basic Droplet (Ubuntu 22.04 or 24.04).
2.  Select a plan (Basic $6/mo is often enough for testing, but $12/mo recommended for AI/ML workloads).
3.  Add your SSH Key.

### 2. SSH into Droplet
```bash
ssh root@your_droplet_ip
```

### 3. Install Docker & Docker Compose
```bash
# Update repositories
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Verify installation
docker --version
docker compose version
```

### 4. Clone & Run
```bash
# Clone your repo
git clone https://github.com/StartSomethingAI/ChalkTalk_AI.git
cd ChalkTalk_AI

# Create .env file with your secrets
nano .env
# Paste:
# GOOGLE_API_KEY=your_key
# MONGO_URI=mongodb://mongo:27017
# MONGO_DB_NAME=chalktalk_ai

# Build and Run
docker compose up --build -d
```

### 5. Access the App
-   **Frontend**: `http://your_droplet_ip:3000`
-   **Backend**: `http://your_droplet_ip:8000`

> **Note**: For production, you should set up Nginx as a reverse proxy and use SSL (HTTPS).

## Troubleshooting

-   **Backend failing?** Check logs: `docker compose logs backend`
-   **MongoDB connection error?** Ensure `MONGO_URI` is correct. If running via Docker Compose, use `mongodb://mongo:27017` (service name). If running on App Platform with Atlas, use the `mongodb+srv://...` URL.
