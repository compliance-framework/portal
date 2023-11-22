# Build Stage 1
# This builds the dist files
FROM node:lts-alpine as builder-webapp

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
RUN CGO_ENABLED=0 GOOS=linux go build -o /portal

# Run Stage
# This serves the static files
FROM alpine
WORKDIR /
COPY --from=builder-webapp /dist /dist/
COPY --from=builder-server /portal portal
EXPOSE 8081
CMD ["./portal"]