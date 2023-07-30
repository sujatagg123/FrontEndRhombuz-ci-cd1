# Stage 1: Build the application
FROM node:16.13-alpine AS builder

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Create the final production image
FROM node:16.13-alpine

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/build ./build
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the desired port (default is 3000 for React)
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "run", "start"]
