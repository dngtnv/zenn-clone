import mongoose from 'mongoose'
import config from '../config/default'

const dbURI = config.atlasUri as string
export const connectToServer = () => {
  try {
    mongoose.connect(dbURI)
    console.log(`Successfully connected to Mongodb.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
