import { Form } from "react-router-dom";
import { apiFetch } from '../../../lib/apiFetch'

export const createTodoAction = async ({params}) => {
  try {
    const pro = '093dc44d-ddcc-44b9-baaa-16534ff7f357'
    await apiFetch(`/projects/${pro}/todos`, {
      method: 'POST',
      body: JSON.stringify({ title: 'sample', due: new Date() })
    })
  } catch (error) {
    console.log('error:loader:', error)
  }
  return null
}

export default function CreateTodo() {
  return (
    <Form method="post">
      <input type="text" name="title"/>
      <input type="date" name="due"/>
      <button type="submit">追加</button>
    </Form>
  )
}
