const http = require('http');

http.createServer((req, res) => {
  const user = {
    id: 123,
    name: 'Pato'
  }

    console.log(req);
    res.writeHead(200, { 'Conntent-Type': 'application/csv' });
    res.write(JSON.stringify(user))
    res.end();
  }).listen(3000)