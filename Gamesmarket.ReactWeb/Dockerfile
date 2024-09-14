# Use a Node.js image
FROM node:18.20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve
RUN npm i -g serve

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Expose the port that Vite runs on
EXPOSE 3000

# Run the production server
CMD [ "serve", "-s", "dist" ]
