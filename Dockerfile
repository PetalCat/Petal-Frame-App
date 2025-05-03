FROM node:20-alpine

WORKDIR /app

# Install deps & http-server
COPY package*.json ./
RUN npm install && npm install -g http-server

# Copy full project (so we can run vite)
COPY . .

# Build the Vite project
RUN npm run build

# Serve built assets
WORKDIR /app/www
EXPOSE 4173
CMD ["http-server", ".", "-p", "4173"]
