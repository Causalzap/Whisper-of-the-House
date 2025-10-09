/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 方便 .prose-invert 等深色样式
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',  // 确保透明背景可用
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
