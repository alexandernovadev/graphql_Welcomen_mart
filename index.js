'use strict'
require('dotenv').config()
const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

// Begin App
const app = express()
const port = process.env.port || 3111

// definiendo el esquema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(port,() => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
