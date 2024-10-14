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

# Define build-time variables
ARG NEXT_PUBLIC_BUILDER_API_KEY
ARG GA_PROPERTY_ID
ARG GA_TRACKING_ID

# Pass the environment variables
ENV NEXT_PUBLIC_BUILDER_API_KEY=${NEXT_PUBLIC_BUILDER_API_KEY}
ENV GA_PROPERTY_ID=${GA_PROPERTY_ID}
ENV GA_TRACKING_ID=${GA_TRACKING_ID}

# Build the Next.js app (includes fetching server-side pages from Builder.io)
RUN npm run build

# Stage 2: Create a new image from the previous one
FROM node:18-alpine AS runner

# Set environment variable to production
ENV NODE_ENV=production

# Set working directory in the runner container
WORKDIR /app

# Copy over the built Next.js app from the previous stage
COPY --from=builder /app ./

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
