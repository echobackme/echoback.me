FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY Main.java .
RUN javac Main.java

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/Main.class .

# The port the Java HTTP server will listen on (overwritten by the environment at runtime)
ENV PORT=8081
EXPOSE $PORT

CMD ["java", "Main"]
