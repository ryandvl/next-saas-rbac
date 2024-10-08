import { z } from 'zod'

export function l(string: string) {
  return z.literal(string)
}

export { z }
