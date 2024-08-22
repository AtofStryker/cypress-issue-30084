import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1000,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});
