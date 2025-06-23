import antfu from '@antfu/eslint-config'
import turboConfig from 'eslint-config-turbo/flat'

export default antfu(
  {
    unocss: true,
    formatters: true,

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    ignores: ['dist/', 'public/'],
  },
  {
    rules: {
      // override default options for rules from base configurations
      'quote-props': ['warn', 'as-needed'],
      'style/quote-props': ['warn', 'as-needed'],
      // 'comma-dangle': ['warn', 'only-multiline'],
      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'only-multiline',
        },
      ],
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/brace-style': 'off',
      'style/brace-style': ['warn', '1tbs'],
      'arrow-parens': ['warn', 'as-needed'],
      'style/arrow-parens': ['warn', 'as-needed'],
      curly: ['warn', 'all'],
      'no-unused-vars': ['warn'],
      'vue/no-unused-refs': ['warn'],
      'eslint-comments/no-unlimited-disable': ['warn'],
      'style/max-statements-per-line': ['warn'],
      'vue/no-irregular-whitespace': ['warn'],
      'no-irregular-whitespace': ['warn'],
    },
  },
  turboConfig
)
