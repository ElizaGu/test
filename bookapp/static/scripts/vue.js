// bookapp/static/bookapp/vue.config.js
module.exports = {
    outputDir: '../static/vue',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/static/vue/'
      : '/',
  };
  