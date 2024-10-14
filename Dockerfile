# Use an official Node.js runtime as a base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app (this includes fetching server-side pages from Builder.io)
RUN npm run build

# Use a lightweight web server to serve the app (e.g., `nginx` or continue using Node.js)
# We will use the production-ready `next start` in Node.js here.

# Stage 2: Create a new image from the previous one
FROM node:18-alpine AS runner

# # Set environment variable to production
# ENV NODE_ENV=production

# Set working directory in the runner container
WORKDIR /app

# Copy over the built Next.js app from the previous stage
COPY --from=builder /app ./

# Set the port that the container will expose
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
