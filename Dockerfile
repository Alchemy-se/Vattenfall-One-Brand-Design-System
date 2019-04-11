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
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/conf/nginx/nginx.conf /etc/nginx/conf.d/default.conf  
COPY --from=build-stage /app/conf/nginx/htpasswd /etc/nginx/.htpasswd

# Add the Certificates

RUN mkdir -p /etc/ssl
COPY --from=build-stage /app/conf/certs/digitaldesign.vattenfall.com.crt /etc/ssl/digitaldesign.vattenfall.com.crt
COPY --from=build-stage /app/conf/certs/digitaldesign.vattenfall.com.key /etc/ssl/digitaldesign.vattenfall.com.key
