import { l, z } from './utils/zod-subject'

export const rolesSchema = z.union([l('ADMIN'), l('MEMBER'), l('BILLING')])

export type Role = z.infer<typeof rolesSchema>
