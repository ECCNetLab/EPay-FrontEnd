/** @type {{extends: string[], rules: {"scope-enum": (number|string|string[])[]}}} */
const gitConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['web', 'job', 'api']]
  }
};

module.exports = gitConfig
