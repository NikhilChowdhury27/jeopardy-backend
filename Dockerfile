# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Define the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application with nodemon
CMD ["npx", "nodemon", "src/app.js"]
