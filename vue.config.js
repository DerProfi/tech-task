module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/main.scss";`,
      },
    },
  },
  transpileDependencies: ["homeday-blocks", "vue-zoomer"],
};
