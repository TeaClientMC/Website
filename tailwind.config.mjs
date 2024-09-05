/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        tabgroup_transisiton: "transition: background-color 0.3s",
      },
    },
  },
  plugins: [],
};
