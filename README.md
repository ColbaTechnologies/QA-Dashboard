[![Build Status](https://travis-ci.com/ColbaTechnologies/QA-Dasboard.svg?branch=master)](https://travis-ci.com/ColbaTechnologies/QA-Dasboard)

# QA-Dasboard

# Install with docker-compose

1. Create Docker-compose.yml file with the bellow content in an empty folder

```yaml 
version: "3"
services:
  webapp:
    container_name: qa_webapp
    image: xenteclb/qa-dashboard-webapp:1.0
    ports:
      - '3000:3000'
  api:
    container_name: qa_api
    image: xenteclb/qa-dashboard-api:1.0
    ports:
      - '5000:5000'
    depends_on:
      - mongo
  mongoex:
    image: mongo-express
    environment:
      - ME_CONFIG_OPTIONS_EDITORTHEME=ambiance
      - ME_CONFIG_MONGODB_SERVER=mongo
      - ME_CONFIG_MONGODB_PORT=27017
      - ME_CONFIG_MONGODB_ENABLE_ADMIN=true
    ports:
      - "8081:8081"
    depends_on:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    restart: always
    environment:
      - MONGO_INITDB_DATABASE=qaDashboard 
    volumes:
      - mongodata:/data_docker/db
    ports:
      - "27017:27017"
volumes:
  mongodata:
  ``` 
2. Run docker-compose up
3. Test in your browser using http://localhost:3000 url
