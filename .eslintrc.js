module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        groups: [
          '/(^@?react|^next)/',
          'module',
          '/^@(theme|components|pages|utils|hooks|store|globalTypes|constants)/',
          '/^@public/',
          '/^@modules/',
          ['parent', 'sibling', 'index'],
          '/.*(styled)$/',
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/default-props-match-prop-types': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'jsx-a11y/media-has-caption': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
