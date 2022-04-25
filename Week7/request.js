const {request} = require("http");
let requestStream = request({
  hostname: "google.com",
  path: "/",
  method: "GET",
  headers: {Accept: "text/html"}
}, response => {
  console.log("Server responded with status code",
              response.statusCode);
});
requestStream.end();