import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginMdToHTML from "vite-plugin-md-to-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginMdToHTML()],
  server: {
    port: 3000,
  },
});
