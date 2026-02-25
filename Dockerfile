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

# Install Angular CLI globally
RUN npm install -g @angular/cli@1.5.4

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production && \
    npm install

# Copy source code
COPY . .

EXPOSE 4200

CMD ["npm", "start"]