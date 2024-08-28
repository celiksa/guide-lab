# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install -D tailwindcss postcss autoprefixer

RUN npx tailwindcss init

# Copy the rest of the application
COPY . .



# Expose port 80
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
