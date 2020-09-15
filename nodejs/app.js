const http = require('http');
const dirTree = require("directory-tree");

const hostname = '127.0.0.1';
const port = 3000;
// var tree = directoryTree('/some/path');


const server = http.createServer((req, res) => {
  var filteredTree = dirTree('/rss-files/external-hdd');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(filteredTree));
  console.log('filteredTree', filteredTree);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
