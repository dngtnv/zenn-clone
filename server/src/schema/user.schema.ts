import { object, string, TypeOf } from 'zod'

const payload = {
  body: object({
    name: string().optional(),
    username: string({
      required_error: 'username is required',
    })
      .min(1, { message: 'Must be 1 or more characters long' })
      .max(37, { message: 'Must be 37 or fewer characters long' })
      .trim()
      .optional(),
    bio: string().optional(),
    githubUsername: string().optional(),
    twitterUsername: string().optional(),
    websiteUrl: string().optional(),
  }),
}
const params = {
  params: object({
    userId: string({
      required_error: 'userId is required',
    }),
  }),
}

export const updateUserSchema = object({
  ...payload,
  ...params,
})

export const updateCurrentUserSchema = object({
  ...payload,
})

export type UpdateUserInput = TypeOf<typeof updateUserSchema>
