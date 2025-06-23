import { describe, expect, it, vitest } from 'vitest'
import { log } from '../src'

vitest.spyOn(globalThis.console, 'log')

describe('@zhaobc/logger', () => {
  it('prints a message', () => {
    log('hello')
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toBeCalledWith('LOGGER: ', 'hello')
  })
})
