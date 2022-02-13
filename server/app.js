const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./services/auth');
const db = require('./db/mongo');
const { MONGO_URI } = require('./config/keys');
const MongoStore = require('connect-mongo');
const schema = require('./schemas/schema');
const models = require('./models');

const app = express();

// https://www.freecodecamp.org/news/how-to-build-a-blazing-fast-graphql-api-with-node-js-mongodb-and-fastify-77fd5acd2998/
// https://htoopyaelwin.medium.com/graphql-with-express-mongodb-58ca98172c79

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      autoReconnect: true
    })
  })

)

app.use(passport.initialize());
app.use(passport.session());


app.use('/graphql', graphqlHTTP({
  schema,
  // rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');