import { z, l } from '../utils/zod-subject'

export const userSubject = z.tuple([
  z.union([l('manage'), l('get'), l('update'), l('delete')]),
  l('User'),
])

export type UserSubject = z.infer<typeof userSubject>
