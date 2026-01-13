/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // هذا هو التعديل المطلوب لنسخة v4
  },
};

export default config;