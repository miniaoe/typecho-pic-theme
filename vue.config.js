module.exports = {
  devServer: {
    open: true, //是否自动弹出浏览器页面
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://blog.migos.cloud/", //API服务器的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
