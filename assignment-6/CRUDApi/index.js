const http = require('http');
const url = require('url');
const fs = require('fs');
const data = fs.readFileSync('./data.json');
let projects = JSON.parse(data);


const server = http.createServer((req, res) => {

  const urlparse = url.parse(req.url, true);

  if (urlparse.pathname == '/projects' && req.method == 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(projects, null, 2));
  }
  if (urlparse.pathname == '/projects' && req.method == 'POST') {
    req.on('data', data => {

      const jsondata = JSON.parse(data);
      const givenid = jsondata.id;
      const givenname = jsondata.name;
      projects.push({ id: givenid, name: givenname });

      fs.writeFile('./data.json', JSON.stringify(projects), (err) => {
        if (err) {
          const message = { message: 'could not persist data!' };
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(message, null, 2));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(projects, null, 2));
        }
      });
    });
  }


  if (urlparse.pathname == '/projects' && req.method == 'PUT') {
    req.on('data', data => {
      const search = urlparse.search;
      if (search) {
        const [, query] = urlparse.search.split('?');
        const id = parse(query).id;
        if (id) {
          const jsondata = JSON.parse(data);
          const givenName = jsondata.name;

          {
            projects.forEach((project, index) => {
              if (project.id == id) {
                projects[index].name = givenName;
              }
            });
            fs.writeFile('./data.json', JSON.stringify(projects), (err) => {
              if (err) {
                const message = { message: 'could not persist data!' };
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(message, null, 2));
              } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(projects, null, 2));
              }
            });
          }
        }
      }
    });
  }
  if (urlparse.pathname == '/projects' && req.method == 'DELETE') {
    const search = urlparse.search;
    if (search) {
      const [, query] = urlparse.search.split('?');
      const data = parse(query);

      projects = projects.filter(project => project.id != data.id);

      fs.writeFile('./data.json', JSON.stringify(projects), (err) => {
        if (err) {
          const message = { message: 'could not persist data!' };
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(message, null, 2));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(projects, null, 2));
        }
      });
    } else {
      const message = { message: 'no query parameter!' };
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(message, null, 2));
    }
  }

});


server.listen(8000, "127.0.0.1", () => {
  console.log("The server is listening on port 8000")
})