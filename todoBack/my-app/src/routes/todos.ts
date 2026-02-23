import { Hono } from 'hono'
import prisma from '../lib/prisma'

const todos = new Hono()

// GET /projects/:projectId/todos
todos.get('/', async (c) => {
  const projectId = c.req.param('projectId') as string
  const project = await prisma.project.findUnique({ where: { id: projectId } })
  if (!project) return c.json({ error: 'project not found' }, 404)
  const all = await prisma.todo.findMany({
    where: { projectId },
    orderBy: { createdAt: 'desc' },
  })
  return c.json(all)
})

// POST /projects/:projectId/todos
todos.post('/', async (c) => {
  const projectId = c.req.param('projectId') as string
  const body = await c.req.json<{ title?: string; due?: string }>()
  if (!body.title || typeof body.title !== 'string') {
    return c.json({ error: 'title is required' }, 400)
  }
  if (!body.due || typeof body.due !== 'string') {
    return c.json({ error: 'due is required' }, 400)
  }
  const dueDate = new Date(body.due)
  if (isNaN(dueDate.getTime())) {
    return c.json({ error: 'due must be a valid ISO 8601 date string' }, 400)
  }
  const project = await prisma.project.findUnique(
    {
      where: { id: projectId },
    }
  )
  if (!project) return c.json({ error: 'project not found' }, 404)
  const todo = await prisma.todo.create({
    data: { projectId, title: body.title, due: dueDate },
  })
  return c.json(todo, 201)
})

// GET /projects/:projectId/todos/:todoId
todos.get('/:todoId', async (c) => {
  const projectId = c.req.param('projectId') as string
  const todoId = c.req.param('todoId')
  const todo = await prisma.todo.findUnique({ where: { todoId } })
  if (!todo || todo.projectId !== projectId) {
    return c.json({ error: 'todo not found' }, 404)
  }
  return c.json(todo)
})

// PATCH /projects/:projectId/todos/:todoId
todos.patch('/:todoId', async (c) => {
  const projectId = c.req.param('projectId') as string
  const todoId = c.req.param('todoId')
  const body = await c.req.json<{ title?: string; due?: string }>()
  const existing = await prisma.todo.findUnique({ where: { todoId } })
  if (!existing || existing.projectId !== projectId) {
    return c.json({ error: 'todo not found' }, 404)
  }
  const data: { title?: string; due?: Date } = {}
  if (body.title !== undefined) data.title = body.title
  if (body.due !== undefined) {
    const dueDate = new Date(body.due)
    if (isNaN(dueDate.getTime())) {
      return c.json({ error: 'due must be a valid ISO 8601 date string' }, 400)
    }
    data.due = dueDate
  }
  const todo = await prisma.todo.update({ where: { todoId }, data })
  return c.json(todo)
})

// DELETE /projects/:projectId/todos/:todoId
todos.delete('/:todoId', async (c) => {
  const projectId = c.req.param('projectId') as string
  const todoId = c.req.param('todoId')
  const existing = await prisma.todo.findUnique({ where: { todoId } })
  if (!existing || existing.projectId !== projectId) {
    return c.json({ error: 'todo not found' }, 404)
  }
  await prisma.todo.delete({ where: { todoId } })
  return c.json({ success: true })
})

export default todos
