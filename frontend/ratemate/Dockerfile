# Set the base image to use for this Dockerfile
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the container
COPY package*.json .

# Install the required packages
RUN npm ci

# Copy the source code to the container
COPY . .

# Expose the port number where the application will be available
EXPOSE 3000

# Set the command to be executed when running the container
CMD ["npm", "start"]