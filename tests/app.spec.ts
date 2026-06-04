import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../app.vue'

describe('App', () => {
  it('renders correctly', async () => {
    const component = await mountSuspended(App)
    expect(component.exists()).toBe(true)
  })
})
