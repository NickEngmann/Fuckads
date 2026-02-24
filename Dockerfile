# .dockerignore
# node_modules
# npm-debug.log
# .git
# .gitignore
# .env
# .env.*
# *.md
# .vscode
# .idea
# dist
# coverage
# e2e
# karma.conf.js
# protractor.conf.js
# tslint.json
# angular-cli.json
# .angular-cli.json

FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Install dev dependencies for build (needed for ng serve in dev mode)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

EXPOSE 4200

CMD ["npm", "start"]