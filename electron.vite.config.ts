import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default {
  main: defineConfig({
    base: process.env.IS_DEV !== "true" ? "./" : "/",
    build: {
      outDir: resolve(__dirname, "dist", "main"),
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src", "main", "index.ts"),
        },
      },
    },
  }),
  preload: defineConfig({
    base: process.env.IS_DEV !== "true" ? "./" : "/",
    build: {
      outDir: resolve(__dirname, "dist", "preload"),
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src", "preload", "index.ts"),
        },
      },
    },
  }),
  renderer: defineConfig({
    base: process.env.IS_DEV !== "true" ? "./" : "/",
    plugins: [react()],
    build: {
      outDir: resolve(__dirname, "dist", "renderer"),
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src", "renderer", "src", "main.tsx"),
        },
      },
    },
  }),
};

// https://vitejs.dev/config/
// export default defineConfig({
//   base: process.env.IS_DEV !== 'true' ? './' : '/',
//   build: {
//     outDir: 'dist',
//   },
//   plugins: [react()]
// })
