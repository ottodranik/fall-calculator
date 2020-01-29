module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx'] }],
    'no-param-reassign': ['error', { 'props': false }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};