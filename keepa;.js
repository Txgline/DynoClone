var http = require('http');
var port = process.env.PORT || 3000; // Railway provides PORT
http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
