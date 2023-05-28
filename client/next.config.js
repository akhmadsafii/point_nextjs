const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = {
  async rewrites() {
    return [
      {
        source: '/assets/css/:path*',
        destination: 'http://127.0.0.1:8000/assets/css/:path*',
      },
      {
        source: '/assets/js/:path*',
        destination: 'http://127.0.0.1:8000/assets/js/:path*',
      },
      {
        source: '/assets/media/:path*',
        destination: 'http://127.0.0.1:8000/assets/media/:path*',
      },
    ];
  },
  async serverMiddleware() {
    app.use(
      '/assets/css',
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
      })
    );
    app.use(
      '/assets/js',
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
      })
    );
    app.use(
      '/assets/media',
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
      })
    );
  },
};
