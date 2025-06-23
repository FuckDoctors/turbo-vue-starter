import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: [
      // you can use a list of glob patterns to define your workspaces
      // Vitest expects a list of config files
      // or directories where there is a config file
      'apps/*',
      'packages/*',
      'tests/*/vitest.config.{e2e,unit}.ts',
      {
        // add "extends: true" to inherit the options from the root config
        extends: true,
        test: {
          include: ['tests/**/*.{browser}.test.{ts,js}'],
          // it is recommended to define a name when using inline configs
          name: 'happy-dom',
          environment: 'happy-dom',
        }
      },
      {
        test: {
          include: ['tests/**/*.{node}.test.{ts,js}'],
          name: 'node',
          environment: 'node',
        }
      }
    ],
  },
})
