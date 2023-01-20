const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write("Welcome to our home page");
    // res.end();
    //   if (req.url === '/') {
    //     res.end('Welcome to our home page')
    //   }
    //   if (req.url === '/about') {
    //     res.end('Here is our short history')
    //   }
    //   res.end(`
    //   <h1>Oops!</h1>
    // <p>We can't seem to find the page you are looking for</p>
    // <a href="/">back home</a>
    //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL

    if (req.url === '/') {
        res.end("Welcome to our home page");
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    }
    else (res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `));
});

server.listen(5500); // after $node app.js http://localhost:5500/

//After add sth, need to restart $node app.js
//http://localhost:5500/about
//http://localhost:5500/err