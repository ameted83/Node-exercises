const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    // const jsonResponseBody = JSON.stringify({ location: "Mars" });

    response.end("<html><body>Benvenuto nel World Wide Web!</body></html>");
  });
}

module.exports = createApp;
