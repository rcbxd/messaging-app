FROM node:10.15.0-alpine

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm i

COPY . /home/app