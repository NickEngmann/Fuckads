# .dockerignore
# node_modules
# dist
# .git
# .gitignore
# README.md
# Dockerfile
# .dockerignore
# *.log
# .env
# .env.*
# coverage
# e2e
# karma.conf.js
# protractor.conf.js
# tsconfig.spec.json
# tslint.json

FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && \
    npm install -g @angular/cli@1.5.4 && \
    npm ci

COPY . .

EXPOSE 4200

CMD ["npm", "start"]