import express, { json } from 'express'
import cors from 'cors'
const port = process.env.PORT || 5000
import routes from './routes'
import { connectToServer } from './db/connect'
import logging from './library/logging'

const app = express()
app.use(cors())
app.use(json())
// app.use(require("./routes/record"))
// get driver connection

// routes
/* app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
}) */

app.listen(port, () => {
  // perform a database connection when server starts
  connectToServer()
  routes(app)
  logging.info(`Server is running on port: ${port}`)
})
