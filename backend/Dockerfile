FROM node:16.17.0 AS builder

WORKDIR /usr/src/api

COPY package*.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

CMD [ "node", "index.js" ]
