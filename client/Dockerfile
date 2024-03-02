# Use an official Node.js runtime as the base image
FROM node:20 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the server to serve the static files
FROM nginx:alpine

# Copy the build folder from the previous stage to the NGINX server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
