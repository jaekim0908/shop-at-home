module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    host: '127.0.0.1',
    port:8080,
    public: 'localhost:8080',
    proxy: {
      '/api': {
        target: 'http://localhost:7071',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
