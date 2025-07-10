import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    ignores: ['dist/', '.astro/'],
  },
  {
    rules: {
      // You can add any rule overrides here
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  }
);
