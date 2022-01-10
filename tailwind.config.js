module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          base: "#666668",
          dark: "#2C2C2E"
        },
        message: {
          blue: "#007AFF",
          gray: "#F2F2F7"
        }
      }
    }
  },
  plugins: []
};
