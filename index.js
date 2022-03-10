'use strict'

const { graphql, buildSchema } = require('graphql')

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

// Ejecutar el query hello
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
})
