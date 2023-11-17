# Build Stage 1
# This build created a staging docker image 
#
FROM node:21-alpine AS appbuild
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 8081
CMD pnpm preview