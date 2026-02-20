import { useAtom } from 'jotai'
import { todoAtom } from './state'
import './App.css'


function App() {
  const [todos,] = useAtom(todoAtom)
  return (
    <div>
      <h1>Test</h1>
      {todos.map(t => {
        return (
          <div key={t.id}>
            <p>{t.title}</p>
            <p>{t.due.toISOString()}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
