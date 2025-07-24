import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["xavier-one.lndo.site"],
  },
plugins:[  vue({
    template: { transformAssetUrls },
  }),
  Vuetify({
    autoImport: true,
    styles: { configFile: "./src/styles/vuetifySettings.scss" },
  }),],
  base: "/major-quiz/test",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
