import { projectSchema } from '../models/project'
import { l, z } from '../utils/zod-subject'

export const projectSubject = z.tuple([
  z.union([l('manage'), l('get'), l('create'), l('update'), l('delete')]),
  z.union([l('Project'), projectSchema]),
])

export type ProjectSubject = z.infer<typeof projectSubject>
