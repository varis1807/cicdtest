ARG IMAGE=node:18.14.2-alpine

#COMMON
FROM $IMAGE as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY tsconfig.json /usr/src/app

COPY . ./

RUN npm run build parchaa-ndhm

CMD [ "node", "dist/apps/parchaa-ndhm/main.js" ]
# CMD [ "nest", "start" , "parchaa-ndhm"]