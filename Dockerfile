FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for the build step)
RUN npm install

# Copy the rest of the application
COPY . .

# Build the client and server
RUN npm run build

# Prune dev dependencies to reduce image size (optional, but good practice)
RUN npm prune --production

# Expose the default port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
