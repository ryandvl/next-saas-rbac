import { z, l } from '../utils/zod-subject'

export const projectSubject = z.tuple([
  z.union([l('manage'), l('get'), l('create'), l('update'), l('delete')]),
  l('Project'),
])

export type ProjectSubject = z.infer<typeof projectSubject>
