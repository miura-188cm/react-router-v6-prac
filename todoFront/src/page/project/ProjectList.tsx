import { Link, useLoaderData } from 'react-router-dom'

import { apiFetch } from '../../lib/apiFetch'
import type { Project } from '../../type'

export const projectLoader = (): Promise<Project[]> => {
  return apiFetch<Project[]>('/projects')
}

export default function ProjectList() {
  const projects = useLoaderData() as Project[];
  return (
    <div>
      {projects.map(p => {
        return (
          <div>
            <Link to={p.id} key={p.id}>{p.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
