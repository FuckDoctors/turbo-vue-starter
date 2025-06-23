/** @type {import("@commitlint/types").UserConfig} */

module.exports = {
  // parserPreset: 'conventional-changelog-conventionalcommits',
  extends: ['@commitlint/config-conventional'],

  rules: {
    'subject-case': [1, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']]
  }
}
