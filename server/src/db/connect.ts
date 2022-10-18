import mongoose from 'mongoose'
import config from '../config/default'
import logging from '../library/logging'

const dbURI = config.atlasUri as string
export const connectToServer = () => {
  try {
    mongoose.connect(dbURI, { retryWrites: true, w: 'majority' })
    logging.info('Connected to Mongodb.')
  } catch (err) {
    logging.error('Unable to connect: ')
    logging.error(err)
    process.exit(1)
  }
}
