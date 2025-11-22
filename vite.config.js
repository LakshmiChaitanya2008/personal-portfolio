import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import forms from "@tailwindcss/forms";
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  tailwindcss: {
    plugins: [forms()],
  },
});
