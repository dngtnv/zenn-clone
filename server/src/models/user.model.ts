import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
  email: string
  name: string
  password: string
  picture: string
  createAt: Date
  updateAt: Date
}
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel
