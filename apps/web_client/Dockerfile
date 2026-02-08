FROM node:24.13.0 AS build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
COPY --from=build /app/.build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
