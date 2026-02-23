# .dockerignore
# node_modules
# dist
# .git
# .gitignore
# README.md
# *.log
# Dockerfile
# docker-compose.yml
# .env
# .vscode
# .idea

FROM node:20-slim

WORKDIR /app

# Install necessary tools for Angular CLI
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (including Angular CLI)
RUN npm ci --only=production && \
    npm install -g @angular/cli@1.5.4

# Copy the rest of the application source
COPY . .

# Expose the default Angular dev server port
EXPOSE 4200

# Start the Angular development server
CMD ["npm", "start"]