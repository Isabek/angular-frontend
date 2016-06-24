var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

app.use(express.static('./app'));

app.get("/", function (req, res) {
  res.sendFile('./app/index.html');
});

app.listen(port, host, function () {
  console.log("Server listening on port %s:%s", host, port);
});