# Build Stage 1
# This builds the dist files
FROM node:lts as builder-webapp

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
RUN mv dist /dist


# Run Stage
# This serves the static files
FROM ghcr.io/compliance-framework/nano-web:latest
WORKDIR /
COPY --from=builder-webapp /dist /public/
ENV PORT=8081
ENV SPA_MODE=1
ENV VITE_CONFIGURATION_SERVICE_URL="http://localhost:8080/api"
