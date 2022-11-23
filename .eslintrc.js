/** @type {import('eslint/lib/shared/types').ConfigData} */
const useTypeScript = true;

const lintEs = {
  env: {
    browser: true,
    jquery: true,
    node: true,
    es6: true
  },
  globals: {},
  parserOptions: {
    sourceType: module,
    ecmaVersion: 2015
  },
  rules: {
    'no-console': 'warn',
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'quotes': [
      'warn', 'single'
    ],
    'space-before-blocks': [
      'warn', {
        'functions': 'always'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'es5'
      }
    ]
  }
};

const lintTs = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '*.config.js'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      tsx: true,
    },
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json'
    ]
  },
  globals: {
    model: true,
    require: true
  },
  plugins: [
    '@typescript-eslint',
    "next",
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks',
    'prettier',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    "next/core-web-vitals",
    "react-app",
    "react-app/jest",
    'eslint:recommended',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'argsIgnorePattern': '_',
      'ignoreRestSiblings': false,
      'varsIgnorePattern': '_'
    }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    'react/prefer-stateless-function': [0],
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': ['error', {html: 'enforce', custom: 'enforce', explicitSpread: 'ignore'}],
    'react/react-in-jsx-scope': 'off',
    'no-empty-function': 0,
    'no-console': 'warn',
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'no-restricted-imports': ['error', {'patterns': ['./', '../']}],
    'no-use-before-define': 'off',
    'no-void': ['error', {allowAsStatement: true}],
    'quotes': ['warn', 'single'],
    'space-before-blocks': ['warn', {'functions': 'always'}],
    'semi': ['error', 'always'],
    'import/order': ['error', {'alphabetize': {'order': 'asc'}}],
    'import/extensions': ['error', 'ignorePackages', {ts: 'never', tsx: 'never'}],
    'import/no-anonymous-default-export': 'off',
    'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true,}],
    'padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'return'}],
    'prettier/prettier': ['error', {'singleQuote': true, 'trailingComma': 'es5'}],
    'prefer-arrow/prefer-arrow-functions': ['error', {
      disallowPrototype: true,
      singleReturnOnly: false,
      classPropertiesAllowed: false
    }],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 160],
  },
  overrides: [
    {
      'files': [
        '*.tsx',
        '**/*.stories.*'
      ],
      'rules': {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      'webpack': {
        'config': 'webpack.config.js',
      }
    },
    'import/extensions': [
      'ts',
      'tsx',
    ]
  }
};

module.exports = useTypeScript ? lintTs : lintEs;
