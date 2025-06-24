// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/start/plugin/vite";
import path from "path";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: true
  },
  plugins: [tsConfigPaths(), tanstackStart(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
