#!/bin/bash
# Start backend in background
# Start backend in background inside /app
cd /app
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Start frontend
cd /app/frontend
npm start &
FRONTEND_PID=$!

# Trap shutdown signals
trap "kill $BACKEND_PID; kill $FRONTEND_PID" SIGINT SIGTERM

# Wait for process to exit
wait $FRONTEND_PID
