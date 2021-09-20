# CRM Demo

## Prerequists
- npm
- node
- SQLite3

## Running the Frontend
- `cd client` to get into the client directory
- `npm i` to install all dependencies necessary for the project
- `npm run start` to run the server locally and serve the frontend page

## Running the server

- `cd server` to change into the server directory
- `npm i` to install all dependencies
- Create a `.env` file in the root of the server directory
- Generate an encryption key and add the following line to the `.env` file. This key is used to encrypt JWT's
  - `JWT_SECRET=<KEY_VALUE>`

### Creating the Database
- `node ./migrations/migrations.js` 
  - Note: It is important to do this directly from the server directory because it ensures that the database is created in the correct location

### Start the server
- `npm run start` to start the API
  - It is important to do this directly from the server directory so it can properly access the database