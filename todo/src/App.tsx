import { lazyLoad } from './lazyLoad'
import './App.css'
import { Link } from 'react-router-dom'

export const loader = async () => {
  return await lazyLoad()
}
function App() {
  return (
    <div>
      <Link to={'project/'} >PROJECT</Link>
    </div>
  )
}

export default App
