'use strict'

const { MongoClient } = require('mongodb')
const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_NAME
} = process.env

console.log("heloooo her i am",DB_USER);
const mongoUrl = `mongodb+srv:://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`
// const mongoUrl = `mongodb+srv:://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
let connection
// mongodb+srv://db_user_platzivideo:<password>@cluster0.0nyyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB