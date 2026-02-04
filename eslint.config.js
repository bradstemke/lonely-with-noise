import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Astro recommended config
  ...eslintPluginAstro.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // General JavaScript/TypeScript rules
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts', '**/*.astro'],
    rules: {
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
    },
  },

  // Ignore patterns
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'public/'],
  },
];
