# .dockerignore
# node_modules
# npm-debug.log
# .git
# .gitignore
# README.md
# .env
# .vscode
# .idea
# dist
# .angular

FROM node:20-slim

WORKDIR /app

# Install necessary tools for Angular CLI
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies (including Angular CLI)
RUN npm ci --silent && npm cache clean --force

# Copy application source
COPY . .

# Expose Angular dev server port
EXPOSE 4200

CMD ["npm", "start"]