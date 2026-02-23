export class ApiError extends Error {
  status: number
  body: unknown

  constructor(status: number, body: unknown) {
    super(`API error: ${status}`)
    this.status = status
    this.body = body
  }
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

/*
Usage (React Router loader):

import { apiFetch } from '../lib/apiFetch'

export const loader = async ({ request }: { request: Request }) => {
  return apiFetch<Todo[]>('/api/todos', { signal: request.signal })
}

Usage (POST with JSON):
await apiFetch('/api/todos', {
  method: 'POST',
  body: JSON.stringify({ title: 'sample' })
})
*/
export async function apiFetch<T>(
  path: string,
  init: RequestInit = {}
): Promise<T | null> {

  try {
    console.log(`${BASE_URL}${path}`)
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers ?? {})
      }
    })
    const contentType = res.headers.get('content-type') ?? ''
    const body = contentType.includes('application/json')
      ? await res.json()
      : await res.text()

    if (!res.ok) {
      console.log('error', res.status)
      console.log('res.ok', res.ok)
      throw new ApiError(res.status, body)
    }
    return body as T
  } catch (e) {
    console.log('error', e)
    return null
  }

}
