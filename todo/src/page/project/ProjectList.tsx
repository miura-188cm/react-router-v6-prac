import { useAtom } from 'jotai'
import { projectAtom } from '../../state'
import { lazyLoad } from '../../lazyLoad'
import { Link } from 'react-router-dom'

export const loader = async () => {
  return await lazyLoad()
}

export default function ProjectList() {
  const [projects,] = useAtom(projectAtom)
  return (
    <div>
      {projects.map(p => {
        return (
          <div>
            <Link to={p.title} key={p.id}>{p.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
