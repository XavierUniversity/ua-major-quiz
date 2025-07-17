import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  server: {
    allowedHosts: ["xavier-one.lndo.site"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules") &&
            (id.includes("lodash") ||
              id.includes("axios") ||
              id.includes("pinia"))
          ) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: { configFile: "./src/styles/vuetifySettings.scss" },
    }),
  ],

  base: "/one/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
