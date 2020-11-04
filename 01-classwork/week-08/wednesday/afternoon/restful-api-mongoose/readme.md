# RESTful API with MVC patterns using a MongoDB

## What is it?

is a RESTful API with MVC patterns connected to a MongoDB database exposing the following endpoints:

| CRUD   | Endpoints                         | HTTP verb | Payload                                             | Result                                |
| ------ | --------------------------------- | --------- | --------------------------------------------------- | ------------------------------------- |
| READ   | `http://localhost:5000/music`     | GET       | NA                                                  | All music resources                   |
| READ   | `http://localhost:5000/music/:id` | GET       | NA                                                  | A single music resource               |
| CREATE | `http://localhost:5000/music/:id` | POST      | `{ "title": "Title song", "artist": "artist name"}` | The creation of single music resource |
| UPDATE | `http://localhost:5000/music/:id` | PUT       | `{ "title": "Title song", "artist": "artist name"}` | The update of single music resource   |
| DELETE | `http://localhost:5000/music/:id` | DELETE    | NA                                                  | The deletion of single music resource |

## How to install

1. Navigate to development

```sh
cd ~/development
```

2. Copy the contents of this folder into development

```sh
cp -R  ~/development/01-classwork/week-08/wednesday/afternoon/restful-api-mongoose .
```

3. Navigate to `restful-api-mongoose` folder

```sh
cd restful-api-mongoose
```

4. Install dependencies

```sh
yarn
```

## How to run

1. Start API server with

```sh
yarn start
```

2. In another terminal tab, navigate to **development**

```sh
cd ~/development
```

> Note: Some will need to change the server port to `2700`

3. Start MongoDB server

```sh
mongod --dbpath ./db/data
# mongod --dbpath ./db/data --port 2700

```

4. Go To Postman and try the requests decribed above

## How to seed the database

With MongoDB server running (steps 2 and 3 decribed above), run

```sh
yarn seed
```

## Steps to recreate from zero

- [ ] Create a node project
- [ ] Set node version in a `.nvmrc` file
- [ ] Ignore `node_modules` in a `.gitignore` file
- [ ] Create an `index` file in the root folder
- [ ] Install the following dependencies
  - [Express](https://expressjs.com/)
  - [Body parser](https://github.com/expressjs/body-parser#readme)
  - [Mongoose](https://mongoosejs.com/docs/index.html)
  - [Winston](https://github.com/winstonjs/winston#readme)
  - [Nodemon](https://nodemon.io/)
- [ ] On the `index` file initialise an express server
- [ ] Import `body-parser` and tell express to use it to deserialise JSON
- [ ] Create a folder called `middleware`
- [ ] Create a logger using **winston** and plug it to the server as `middleware`
- [ ] Create a folder called `router` and inside create a filename with the name of the resource
- [ ] 🟢 Write just ONE route and call a controller of that resource
- [ ] Create a folder called `controller` and inside create a filename with the name of the resource
- [ ] 🟢 Create an `async` function that have `request` & `response` as parameter and deal with the petition
- [ ] Create a folder called `model` and inside create a filename with the name of the resource
- [ ] Inside of the resource model file, import `mongoose`, create an schema and then a Model
- [ ] 🟢 Create an `async` function that deal with the read/write to database.
- [ ] Repeat for all endpoints these steps 🟢
