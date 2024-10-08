import { l, z } from '../utils//zod-subject'

export const billingSubject = z.tuple([
  z.union([l('manage'), l('get'), l('export')]),
  l('Billing'),
])

export type BillingSubject = z.infer<typeof billingSubject>
