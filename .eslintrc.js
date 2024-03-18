module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'header',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'header/header': [
      'error',
      'block',
      [
        '*',
        ' * This file is part of SQD Nest Skeleton.',
        ' *',
        ' * (c) SQD Inc. <dev@sqd.com>.',
        ' *',
        ' * This source file is subject to a proprietary license that is bundled',
        ' * with this source code in the file LICENSE.',
        ' ',
      ],
      '1',
      {
        lineEndings: 'unix',
      },
    ],

  },
};
