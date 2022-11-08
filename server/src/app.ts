import express from 'express'
import cors from 'cors'
import { connectToDB } from './db/connect'
import logger from './library/logger'
import http from 'http'
import config from '../src/config/default'
import deserializeUser from './middleware/deserializeUser'
import cookieParser from 'cookie-parser'
import router from './routes'

const port = config.port || 5000
const app = express()

const StartServer = () => {
  app.use((req, res, next) => {
    // Log the Request
    logger.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    )
    res.on('finish', () => {
      // Log the Response
      logger.info(
        `Result -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      )
    })
    next()
  })
  app.use(cookieParser())
  app.use(
    cors({
      origin: config.origin,
      credentials: true,
    })
  )
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(deserializeUser)

  // Rules of API
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.origin)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      )
      return res.status(200).json({})
    }
    next()
  })

  // Routes
  app.use(router)
  // routes(app)

  // Error handling
  app.use((req, res, next) => {
    const error = new Error('Not Found')
    logger.error(error)
    return res.status(404).json({ message: error.message })
  })

  http.createServer(app).listen(port, () => {
    connectToDB()
    logger.info(`Server is running on port: ${port}`)
  })
}

StartServer()
