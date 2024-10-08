import { l, z } from '../utils/zod-subject'

export const inviteSubject = z.tuple([
  z.union([l('manage'), l('get'), l('create'), l('delete')]),
  l('Invite'),
])

export type InviteSubject = z.infer<typeof inviteSubject>
