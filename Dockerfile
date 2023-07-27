# Use an official Node.js runtime as the base image
FROM node:16.13-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

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
