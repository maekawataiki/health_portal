# Health Portal

The project includes following functionality.

- Mongo DB
- Express Routing
- Angular Material
- Authentication

## Getting Started

### DocumentDB

Username: `useradmin`
Password: `***************`

### MongoDB

You can either use your existing MongoDB or 
Run `docker run -d -p 27017:27017 mongo` to start Mongo DB server on docker.

MongoDB is running on `http://localhost:27017/` by default.
You can use [MongoDB compass](https://www.mongodb.com/products/compass) or similar tool to manipulate the DB.

`-v /usr/share/mongo/data/db:/data/db` to persist data.

### Elasticsearch

Run `docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.1.1`
to start Elasticsearch on docker.

Japanese version: `docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch-kuromoji`

Pass following argument to for persisting the data. With this option, 
data is stored on the local machine (not in docker).
`-v /data:/usr/share/elasticsearch/data`

List plugins `http://localhost:9200/_cat/plugins`

### Frontend & Backend

Run `npm run serve` to run server and angular.
This runs frontend (Angular) and backend (Express & Node) concurrently.

Frontend is running on `http://localhost:4200/` and backend api is running on `http://localhost:3000/` by default.
Navigate to the URL on the browser.
