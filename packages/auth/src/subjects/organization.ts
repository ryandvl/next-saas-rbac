import { organizationSchema } from '../models/organization'
import { l, z } from '../utils/zod-subject'

export const organizationSubject = z.tuple([
  z.union([l('manage'), l('update'), l('delete'), l('transfer_ownership')]),
  z.union([l('Organization'), organizationSchema]),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
