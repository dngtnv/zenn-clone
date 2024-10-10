import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  name: string;
  bio: string;
  avatarUrl: string;
  githubUsername: string;
  twitterUsername: string;
  websiteUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    bio: { type: String, required: false },
    avatarUrl: { type: String },
    githubUsername: { type: String, required: false },
    twitterUsername: { type: String, required: false },
    websiteUrl: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
