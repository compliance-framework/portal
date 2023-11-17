# Build Stage 1
# This builds the dist files
#
FROM node:lts-alpine as build
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
RUN statik -src=./dist

# Build Stage 2
# This serves the static files
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
EXPOSE 8081