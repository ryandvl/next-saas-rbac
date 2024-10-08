import { l, z } from '../utils/zod-subject'

export const organizationSubject = z.tuple([
  z.union([l('manage'), l('update'), l('delete'), l('transfer_ownership')]),
  l('Organization'),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
