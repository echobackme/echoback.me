# Reverse Proxy

Local HTTP traffic router for the Echoback project

## Purpose
Unifies frontend and backend under a single host (`http://localhost:80`) for local integration
testing to eliminate CORS issues

## Routing (nginx)
*   `/api/*` -> `api_server`
*   `/*` -> `web_client`

## Dev vs Prod
*   **Local Dev:** Runs as a lightweight nginx container
*   **Production:** Not deployed. Replaced by **Firebase Hosting** with identical routing rules
