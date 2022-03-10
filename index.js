'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

// Begin App
const app = express()
const port = process.env.port || 3000

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Marrte'
  },
  saludo: () => {
    return 'Hola a Marrte'
  },
}

/* Ejecutar el query hello
graphql({
  schema: schema,
  source: '{ saludo }',
  rootValue: resolvers,
})
.then((data) => {
  console.log(data)
})
.catch((e) => {
  console.log(e)
})*/

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
