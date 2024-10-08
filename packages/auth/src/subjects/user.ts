import { userSchema } from '../models/user'
import { z, l } from '../utils/zod-subject'

export const userSubject = z.tuple([
  z.union([l('manage'), l('get'), l('update'), l('delete')]),
  z.union([l('User'), userSchema]),
])

export type UserSubject = z.infer<typeof userSubject>
