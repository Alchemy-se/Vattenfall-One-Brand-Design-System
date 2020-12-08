# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10.19 as build-stage
ARG mode
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .



# RUN CI=true yarn development
RUN yarn build
RUN cp -r ./dist /app/build

# Build and upload metadata for algolia search and component overview
RUN yarn build-and-upload-metadata

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/dist /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/conf/nginx/stage.nginx.conf /etc/nginx/conf.d/default.conf


# Add the Certificates

RUN mkdir -p /etc/ssl
COPY --from=build-stage /app/conf/certs/digitaldesign.vattenfall.com.crt /etc/ssl/digitaldesign.vattenfall.com.crt
COPY --from=build-stage /app/conf/certs/digitaldesign.vattenfall.com.key /etc/ssl/digitaldesign.vattenfall.com.key
