# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
# tesseract-ocr: for OCR
# libgl1, libglib2.0-0: for OpenCV
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Install uv for dependency management
RUN pip install uv

# Copy the workspace definition and lock file from the root
COPY pyproject.toml uv.lock ./

# Copy the backend package definition
COPY backend/pyproject.toml ./backend/

# Install dependencies (only external ones first to cache this layer)
RUN uv sync --frozen --no-install-project

# Copy the rest of the backend code
COPY backend ./backend

# Sync the project (installs the backend package)
RUN uv sync --frozen

# Make sure the virtual environment is used
ENV PATH="/app/.venv/bin:$PATH"

# Set working directory to backend so uvicorn finds main.py easily
WORKDIR /app/backend

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run uvicorn server
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
