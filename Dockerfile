# Stage 1: Build static assets with Node
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install packages with force to pull native Linux binaries inside the container
RUN npm install --force

# Copy remaining source code and build
COPY . .
RUN npm run build

# Stage 2: Serve static assets with Nginx
FROM nginx:alpine AS prod

# Copy custom Nginx config (or remove this line if using default Nginx setup)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled files from the build stage to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]