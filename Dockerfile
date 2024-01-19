# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the bot source code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 8888

# Define the command to run your app
CMD ["npm", "start"]
