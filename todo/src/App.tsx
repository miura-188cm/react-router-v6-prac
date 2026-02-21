import { useAtom } from 'jotai'
import { projectAtom } from './state'
import { lazyLoad } from './lazyLoad'
import './App.css'

export const loader = async () => {
  return await lazyLoad()
}
function App() {
  const [projects,] = useAtom(projectAtom)
  return (
    <div>
      <h1>Test</h1>
      {projects.map(p => {
        return (
          <div>
            <p key={p.id}>{p.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
