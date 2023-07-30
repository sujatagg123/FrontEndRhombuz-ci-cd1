# Use an official Node.js runtime as the base image
FROM node:16.13-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Conditionally set environment variables if they are passed as build arguments
ARG prod=false
ARG NEXT_PUBLIC_HELLO_WORLD
ARG SOME_OTHER_VARIABLE

ENV NODE_ENV=production
ENV NEXT_PUBLIC_HELLO_WORLD=$NEXT_PUBLIC_HELLO_WORLD
ENV SOME_OTHER_VARIABLE=$SOME_OTHER_VARIABLE

# Clear npm cache
RUN npm cache clean --force
# Install app dependencies
RUN npm install

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (default is 3000 for React)
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "run", "start"]
