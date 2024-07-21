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

# Ensure the entrypoint script has execution permissions
RUN chmod +x /app/entrypoint.sh

# Expose the port the app runs on
EXPOSE 3000

# Set the entrypoint script
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]

# Start the application with nodemon
CMD ["npx", "nodemon", "src/app.js"]
