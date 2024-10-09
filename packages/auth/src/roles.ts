import { l, z } from './utils/zod-subject'

export const roleSchema = z.union([l('ADMIN'), l('MEMBER'), l('BILLING')])

export type Role = z.infer<typeof roleSchema>
