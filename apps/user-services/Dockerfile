ARG IMAGE=node:18.14.2-alpine
#COMMON
FROM $IMAGE as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY tsconfig.json /usr/src/app

COPY . ./


# RUN npm run build

RUN npm run build user-services

CMD [ "node", "dist/apps/user-services/main" ]
# CMD [ "nest" , "start" ,"user-services"]









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




# # ARG IMAGE=node:16.13-alpine

# # #COMMON
# # FROM $IMAGE as builder

# # WORKDIR /usr/src/app

# # COPY  package*.json ./
# # # COPY  tsconfig.json ./

# # RUN npm install

# # COPY tsconfig.json /usr/src/app

# # # Copy the rest of the application files to the container
# # COPY . .

# # # Build the application
# # RUN npm run build

# # #DEVELOPMENT
# # # FROM builder as dev

# # # CMD [ "node", "dist/apps/abha-services/main" ]
# # CMD [ "npm" , "start" ]