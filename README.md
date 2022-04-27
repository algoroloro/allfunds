# Allfunds Digital

## Before Start

### Server
- Install dependencies
```
cd server
yarn install
```
- Create .env file
```
PORT=3000
DATABASE_URL=mongodb://user:password@ip:port/db_name?retryWrites=true&w=majority
```
- Run seed script to poblate the database
```
yarn run seed
```

### Client
- Install client dependencies
```
cd ..
cd client
yarn install
```

## Let's Start
- Run server start script
```
cd server
yarn run start
```

- Run client start script
```
cd ..
cd client
yarn run start
```