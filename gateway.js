const http = require('http');
const os = require('os');
const { resolve } = require('path');
const wsModule = require('ws');

console.log("Test server starting...");

var handler = function(request, response){
  console.log("Received request from " + request.connection.remoteAddress);

  // connect websocket
  const webSocket = new wsModule("ws://127.0.0.1:30001");

  response.writeHead(200);
  response.end("Container Hostname: " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
