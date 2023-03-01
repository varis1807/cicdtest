# PARCHAA-NDHM  
  
## Parchaa-backend  
  
## Overview  

parchaa-ndhm: Gateway for clients to access all the microservices.  
abha-services: Microservice that deals with ABDM APIs.   
user-services: Microservice that deals with managing user-database.

## For developers:  

Docker, node and Nest.js CLI tool are required to run this project.  
  
To run it,
  
1. Install dependencies  
```
npm i
```

2. Start the microservices that you want. For example if you want to start abha-services:
```
nest start abha-services
```

  Note: All the microservices need to run simultaneously. So run the nest start command for each microservice in different terminals.  
  Note: user-services will start only when required postgres docker container is running. The command for running postgres container is given in Important section.

3. Start the API gateway.
```
nest start
```
  
You can go to `localhost:PORT/api` to access the Swagger UI. By default, the PORT is set to 1506.

## Important  

1. Running user database:  
```
docker run --name parchaa-db -e POSTGRES_PASSWORD=parchaa123 -e POSTGRES_USER=parchaa -p 5030:5432 -d postgres
```
  
2. Also start the FHIR server for storing the user created to FHIR database. For more information on this, checkout https://github.com/Parchaa/parchaa-fhir-server