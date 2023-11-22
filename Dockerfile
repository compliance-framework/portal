# Build Stage 1
# This builds the dist files
FROM node:lts-alpine as builder-webapp

ARG CONFIGURATION_SERVICE_URL="http://localhost:8080/api"
ENV VITE_CONFIGURATION_SERVICE_URL=$CONFIGURATION_SERVICE_URL
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
RUN mv dist /dist


# Build Stage 2
# This builds the go binary
FROM golang:latest as builder-server
WORKDIR /app
COPY main.go .
COPY go.mod .
COPY go.sum .
RUN CGO_ENABLED=0 GOOS=linux go build -o /serve

# Run Stage
# This serves the static files
FROM alpine
WORKDIR /
COPY --from=builder-webapp /dist /public/
COPY --from=builder-server /serve /serve
ENV PORT=8081
EXPOSE $PORT
CMD ["/serve"]