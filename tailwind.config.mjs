/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'polygon-custom-1': 'polygon(10% 0%, 90% 40%, 5% 95%, 95% 100%, 120% 50%, 100% 0%)',
        'polygon-custom-2': 'polygon(90% 0%, 10% 40%, 95% 95%, 5% 100%, -20% 50%, 0% 0%)',
      },
    },
  },
  plugins: [],
};
