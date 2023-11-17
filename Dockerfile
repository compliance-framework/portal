# Build Stage 1
# This build created a staging docker image 
#
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
EXPOSE 8081
CMD pnpm run preview