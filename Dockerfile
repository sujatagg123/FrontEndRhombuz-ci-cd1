# Stage 1: Build the application
FROM node:16.13-alpine AS builder

# Specify all your env variables here as build arguments
ARG prod=false
ARG NEXT_PUBLIC_HELLO_WORLD
ARG SOME_OTHER_VARIABLE 

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy the entire React app to the container
COPY . .

# Conditionally create a .env file if the environment is production
RUN if [ "$prod" = "true" ]; then \
    echo "NEXT_PUBLIC_HELLO_WORLD=$NEXT_PUBLIC_HELLO_WORLD" >> .env.production && \
    echo "SOME_OTHER_VARIABLE=$SOME_OTHER_VARIABLE" >> .env.production; else echo "Environment local" ; fi

# Build the React app
RUN npm run build

# Stage 2: Create the final production image
FROM node:16.13-alpine

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/build ./build
COPY package*.json ./
COPY .env.production .env  # Copy the .env.production file to .env in the final stage

# Install only production dependencies
RUN npm ci --only=production

# Expose the desired port (default is 3000 for React)
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "run", "start"]
