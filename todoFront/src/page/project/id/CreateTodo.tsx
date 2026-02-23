import { Form, type ActionFunctionArgs } from "react-router-dom";
import { apiFetch } from '../../../lib/apiFetch'

export const createTodoAction = async ({ request, params }: ActionFunctionArgs) => {

  const { projectId } = params

  const formData = await request.formData()
  const titleField = formData.get('title')
  const dueField = formData.get('due')
  await apiFetch(`/projects/${projectId}/todos`, {
    method: 'POST',
    body: JSON.stringify({ title: titleField, due: dueField })
  })

  return null
}

export default function CreateTodo() {
  return (
    <Form method="post">
      <input type="text" name="title" />
      <input type="date" name="due" />
      <button type="submit">追加</button>
    </Form>
  )
}
