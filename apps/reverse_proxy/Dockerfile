FROM nginx:alpine

# At startup, the official nginx entrypoint runs envsubst
# to dynamically inject environment variables into the config,
# saving the resolved configuration to /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Filters envsubst to target variables only, preventing it from wiping nginx variables like $host or $scheme
ENV NGINX_ENVSUBST_FILTER=API_CORE_HOST|API_CORE_PORT|WEB_CLIENT_HOST|WEB_CLIENT_PORT

EXPOSE 80

# Here CMD acts as args to the base image's default ENTRYPOINT /docker-entrypoint.sh script
CMD ["nginx", "-g", "daemon off;"]
