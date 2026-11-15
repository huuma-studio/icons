import { defineConfig, type ViteUserConfig } from "vite-plus";

const config: ViteUserConfig = defineConfig({
  oxc: {
    jsx: { runtime: "automatic", importSource: "@huuma/ui" },
  },
  fmt: {
    printWidth: 100,
    ignorePatterns: ["**/*.md"],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      // Icons drop `children` from the props they spread onto the <svg>.
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      // Runs every check JSR publish runs, including slow types.
      "jsr:dry-run": { command: "deno publish --dry-run", cache: false },
    },
  },
});

export default config;
