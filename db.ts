import mysql, { Connection } from 'mysql2/promise' // Importing 'mysql2' for TypeScript

const createConnection = async (): Promise<Connection> => {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })

  return connection
}

export default createConnection
