module.exports = {
  injectChanges: false,
  files: ["./**/*.{html,css,js}"],
  watchOptions: { ignored: "node_modules" },
  server: {
    baseDir: "./",
  },
};
