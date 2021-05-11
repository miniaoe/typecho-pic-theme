module.exports = {
  publicPath: './',
  devServer: {
    open: true, //是否自动弹出浏览器页面
    hotOnly: true,
    proxy: {
      "/api": {
        target: "https://www.vivianp.com/", //API服务器的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
