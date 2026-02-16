# Use Node.js base for build
FROM node:22-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend ./
RUN npm run build

# Use Python base for runtime, add Node.js
FROM python:3.11-slim

# Install Node.js
RUN apt-get update && apt-get install -y \
    curl \
    tesseract-ocr \
    libgl1 \
    libglib2.0-0 \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs nginx \
    && rm -rf /var/lib/apt/lists/*

# Setup Backend
WORKDIR /app
RUN pip install uv
COPY pyproject.toml uv.lock ./
COPY backend/pyproject.toml ./backend/
RUN uv sync --no-install-project
COPY backend ./backend
RUN uv sync
# Force install uvicorn to ensure it's available
RUN pip install uvicorn

# Setup Frontend from builder
COPY --from=frontend-builder /app/frontend/.next /app/frontend/.next
COPY --from=frontend-builder /app/frontend/public /app/frontend/public
COPY --from=frontend-builder /app/frontend/package.json /app/frontend/package-lock.json /app/frontend/
COPY --from=frontend-builder /app/frontend/next.config.mjs /app/frontend/
WORKDIR /app/frontend
RUN npm ci --omit=dev

# Copy start script
WORKDIR /app
COPY start.sh .
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod +x start.sh

# Environment
ENV NODE_ENV=production
ENV PATH="/app/.venv/bin:$PATH"
# Expose port 80 for Nginx (which routes to 3000 and 8000)
EXPOSE 80

# Start both
CMD ["./start.sh"]
