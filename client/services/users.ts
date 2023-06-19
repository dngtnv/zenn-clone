import { axiosPrivate } from '../utils/axios'

interface UserData {
  name: string
  bio?: string
  githubUsername?: string
  twitterUsername?: string
  websiteUrl?: string
}

interface UserDataInit extends UserData {
  username: string
}

export const updateUser = async (props: UserData | UserDataInit) => {
  try {
    const { data } = await axiosPrivate.put('/me', props)
    const user = data.updateUser
    return user
  } catch (err) {
    console.error('There was an ERROR: ', err)
    throw err
  }
}

export const cancelRegistration = async () => {
  try {
    await axiosPrivate.delete('/me/cancel')
  } catch (err) {
    console.error('There was an ERROR: ', err)
    throw err
  }
}
