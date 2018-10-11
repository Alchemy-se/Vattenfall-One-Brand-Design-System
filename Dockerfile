# Use Node.js version 10
# FROM mhart/alpine-node:10

# # Set the working directory
# WORKDIR /usr/src

# # Copy package manager files to the working directory and run install
# COPY package.json yarn.lock ./
# RUN yarn install

# # Copy all files to the working directory
# COPY . .

# # Run tests
# # RUN CI=true yarn test

# EXPOSE 4000

# # Build the app and move the resulting build to the `/public` directory
# RUN yarn catalog-build
# RUN mv ./catalog/build /public



# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# RUN CI=true yarn test
RUN yarn catalog-build
RUN mv ./catalog/build /app/build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
