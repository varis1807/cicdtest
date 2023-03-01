ARG IMAGE=node:18.14.2-alpine

FROM $IMAGE as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY tsconfig.json /usr/src/app/

COPY . ./


RUN npm run build abha-services

CMD [ "node", "dist/apps/abha-services/main.js" ]











# ARG IMAGE=node:16.13-alpine

# #COMMON
# FROM $IMAGE as builder

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY  package*.json ./

# RUN npm install

# COPY ./ .

# #DEVELOPMENT
# FROM builder as dev

# # CMD [ "node", "dist/apps/parchaa-ndhm/main" ]
# CMD [ "npm", "start" ]