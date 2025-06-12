import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard'
import type { RouteLocationNormalized } from 'vue-router'

describe('is-authenticated.guard', () => {
  const to: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '',
    meta: {},
  }

  const from: RouteLocationNormalized = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '',
    meta: {},
  }

  const next = vi.fn()

  beforeEach(() => {
    localStorage.clear()
  })

  test('should block if not authenticated', () => {
    isAuthenticatedGuard(to, from, next)

    expect(next).toHaveBeenCalledWith({ name: 'login' })
  })

  test('should called localStorage set item lastPath', () => {
    isAuthenticatedGuard(to, from, next)

    const lastPath = localStorage.getItem('lastPath')

    expect(lastPath).toBe(to.path)
  })

  test('should block if not authenticated with spies', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    isAuthenticatedGuard(to, from, next)

    expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path)
  })

  test('should pass if authenticated', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('ABC-123456')

    isAuthenticatedGuard(to, from, next)

    expect(next).toHaveBeenCalledWith()
  })
})
