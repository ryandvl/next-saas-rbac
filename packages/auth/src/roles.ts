import { z } from './utils/zod-subject'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('MEMBER'),
  z.literal('BILLING'),
])

export type Role = z.infer<typeof roleSchema>
