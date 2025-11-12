module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    // omit `project` to avoid type-aware linting on mixed JS/TS repo
  },
  // ignore some generated or non-TS files that cause parser issues
  ignorePatterns: ['node_modules/', 'build/', 'dist/', 'public/', 'src/index.js'],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    // React auto runtime is in use — no need to import React in every file
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    // allow unescaped entities (contractions) in JSX to avoid noise
    'react/no-unescaped-entities': 'off',
    // allow jsx in .tsx only
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // let Prettier handle formatting
    'max-len': ['warn', { code: 120 }],
  },
};
