// https://create-react-app.dev/docs/proxying-api-requests-in-development
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/testAPI",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );
};
