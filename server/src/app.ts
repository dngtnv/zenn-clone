import express, { json } from 'express'
import cors from 'cors'
const port = process.env.PORT || 5000
import routes from './routes'
import { connectToServer } from './db/connect'
import logging from './library/logging'

const app = express()

/** Only start the server if Mongo connects */
const StartServer = () => {
  app.use((req, res, next) => {
    // Log the Request
    logging.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    )
    res.on('finish', () => {
      // Log the Response
      logging.info(
        `Outgoing -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      )
    })
    next()
  })
  app.use(cookieParser())
  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(deserializeUser)

  // Rules of API
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
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
  app.get('/api/oauth/google', googleOauthHandler)

  app.get('/api/user/me', requireUser, getCurrentUser)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)
  // routes(app)
  // Error handling
  app.use((req, res, next) => {
    const error = new Error('not found')
    logging.error(error)
    return res.status(404).json({ message: error.message })
  })

  http.createServer(app).listen(config.port, () => {
    connectToDB()
    logging.info(`Server is running on port: ${port}`)
  })
}

StartServer()
