# Use an official Node.js runtime as a parent image
FROM node:16-alpine as build

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

# Build the React app
RUN npm run build

# Stage 2: Use an official Nginx image to serve the app
FROM nginx:alpine

# Copy the build output to replace the default Nginx contents
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
