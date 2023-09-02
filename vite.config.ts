import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@use "src/variables.sass" as *',
      },
    },
  },
});
