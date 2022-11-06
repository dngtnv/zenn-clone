import { object, string, TypeOf } from 'zod'

const payload = {
  body: object({
    name: string().optional(),
    username: string({
      required_error: 'username is required',
    }),
    bio: string().optional(),
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

export type UpdateUserInput = TypeOf<typeof updateUserSchema>
