import { Hono } from 'hono'
import projects from './routes/projects'
import todos from './routes/todos'

const app = new Hono()

app.route('/projects', projects)
app.route('/projects/:projectId/todos', todos)

export default app
