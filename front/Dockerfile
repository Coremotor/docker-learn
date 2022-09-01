FROM node:16.17.0 AS builder

WORKDIR /usr/src/app

COPY package*.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:latest

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY /conf/nginx /etc/nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
