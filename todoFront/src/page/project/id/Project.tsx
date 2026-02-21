import { useParams } from 'react-router-dom'
import { projectByIdAtom, todoByProjectIdAtom } from '../../../state'
import { useAtomValue } from 'jotai'

export default function Project() {
  const { projectId } = useParams()
  const todos = useAtomValue(todoByProjectIdAtom(projectId!))
  const project = useAtomValue(projectByIdAtom(projectId!))
  return (
    <div>
      <h1>{project.title}</h1>
      {todos.map(t => {
        return (
          <div>
            <p>{t.title}</p>
            <p>{t.due.toDateString()}</p>
          </div>
        )
      })}
    </div>
  )
}
