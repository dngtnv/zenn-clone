import mongoose from 'mongoose';
import config from '../config/default';
import logger from '../library/logger';

const dbURI = config.atlasUri as string;
export const connectToDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(dbURI, { retryWrites: true, w: 'majority' });
    logger.info('Connected to Mongodb.');
  } catch (err) {
    logger.error(`Unable to connect: ${err}`);
    process.exit(1);
  }
};
