import { Hono } from 'hono'
import prisma from '../lib/prisma'

const projects = new Hono()

// GET /projects
projects.get('/', async (c) => {
  const all = await prisma.project.findMany({ orderBy: { createdAt: 'asc' } })
  return c.json(all)
})

// POST /projects
projects.post('/', async (c) => {
  const body = await c.req.json<{ title?: string }>()
  if (!body.title || typeof body.title !== 'string') {
    return c.json({ error: 'title is required' }, 400)
  }
  const project = await prisma.project.create({ data: { title: body.title } })
  return c.json(project, 201)
})

// GET /projects/:projectId
projects.get('/:projectId', async (c) => {
  const { projectId } = c.req.param()
  const project = await prisma.project.findUnique({ where: { id: projectId } })
  if (!project) return c.json({ error: 'project not found' }, 404)
  return c.json(project)
})

// PATCH /projects/:projectId
projects.patch('/:projectId', async (c) => {
  const { projectId } = c.req.param()
  const body = await c.req.json<{ title?: string }>()
  const existing = await prisma.project.findUnique({ where: { id: projectId } })
  if (!existing) return c.json({ error: 'project not found' }, 404)
  const project = await prisma.project.update({
    where: { id: projectId },
    data: { ...(body.title !== undefined && { title: body.title }) },
  })
  return c.json(project)
})

// DELETE /projects/:projectId
projects.delete('/:projectId', async (c) => {
  const { projectId } = c.req.param()
  const existing = await prisma.project.findUnique({ where: { id: projectId } })
  if (!existing) return c.json({ error: 'project not found' }, 404)
  await prisma.project.delete({ where: { id: projectId } })
  return c.json({ success: true })
})

export default projects
