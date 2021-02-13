module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      // classes that are generated dynamically, e.g. `rounded-${size}` and must
      // be kept
      safeList: [],
      content: [
        './src/index.html',
        './src/**/*.{svg,js,ts,jsx,tsx}',
      ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  