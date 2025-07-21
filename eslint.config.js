import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default tseslint.config(
  // Base recommended rules for TypeScript
  ...tseslint.configs.recommended,

  // Recommended rules for Astro
  ...astro.configs["flat/recommended"],

  // I
  {
    ignores: ["dist/", ".astro/"],
  },

  // Override rules
  {
    rules: {
      // You can add any rule overrides here
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);
