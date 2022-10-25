import mongoose from 'mongoose'
import config from '../config/default'
import logger from '../library/logger'

const dbURI = config.atlasUri as string
export const connectToDB = () => {
  try {
    mongoose.connect(dbURI, { retryWrites: true, w: 'majority' })
    logger.info('Connected to Mongodb.')
  } catch (err) {
    logger.error('Unable to connect: ')
    logger.error(err)
    process.exit(1)
  }
}
