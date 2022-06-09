const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
//const cors = require('colors');
const schema = require('./schema/schema');
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;
console.log(process.env.PORT);

const app = express();
//app.use(cors({ credentials: true, origin: true }));

//copnnect to database
connectDb();

app.use(
  '/graphql',
  graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
  }))
);

/** 
 * 
 app.use(
     '/graphql',
     graphqlHTTP({
         schema,
         qraphiql: process.env.NODE_ENV === 'development',
        })
        ); 
        
        */
app.listen(port, console.log(`server running in port ${port}`));
