import { axiosPrivate } from "../utils/axios"

interface UserData {
  username: string,
  bio: string,
  githubUsername: string,
  twitterUsername: string,
  websiteUrl: string
}

export const updateUser = async (props: UserData) => {
  try {
    const { data } = await axiosPrivate.put('/me', props)
    const user = data.updateUser
    return user
  } catch (err) {
    console.error('There was an ERROR: ', err)
    throw err
  }
}
