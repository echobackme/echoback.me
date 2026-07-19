FROM node:24.13.0 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build:all

FROM nginx:alpine

# At startup, the official nginx entrypoint runs envsubst
# to dynamically inject environment variables into the config,
# saving the resolved configuration to /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template
# Destination path must match the 'root' directive in nginx.conf
COPY --from=build /app/.build /usr/share/nginx/html

# The port nginx will listen on (nginx replaces ${PORT} in the config template with this value)
ENV PORT=80
# Filters envsubst to only replace $PORT, preventing it from wiping nginx variables like $uri or $1
ENV NGINX_ENVSUBST_FILTER=PORT
EXPOSE $PORT

# Here CMD acts as args to the base image's default ENTRYPOINT /docker-entrypoint.sh script
CMD ["nginx", "-g", "daemon off;"]
