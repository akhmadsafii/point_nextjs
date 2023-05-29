const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();
const URL_BACKEND = `${process.env.NEXT_BACKEND_URL}`;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/assets/css/:path*',
        destination: `${URL_BACKEND}/assets/css/:path*`,
      },
      {
        source: '/assets/js/:path*',
        destination: `${URL_BACKEND}/assets/js/:path*`,
      },
      {
        source: '/assets/media/:path*',
        destination: `${URL_BACKEND}/assets/media/:path*`,
      },
    ];
  },
  async serverMiddleware() {
    app.use(
      '/assets/css',
      createProxyMiddleware({
        target: `${URL_BACKEND}`,
        changeOrigin: true,
      })
    );
    app.use(
      '/assets/js',
      createProxyMiddleware({
        target: `${URL_BACKEND}`,
        changeOrigin: true,
      })
    );
    app.use(
      '/assets/media',
      createProxyMiddleware({
        target: `${URL_BACKEND}`,
        changeOrigin: true,
      })
    );
  },
};
