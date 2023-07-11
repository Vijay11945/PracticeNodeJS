const { clear } = require('console');
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>
{
   console.log(req.url,req.method,req.headers);
   //process.exit();
   const url = req.url;
   const method = req.method;
   if (url === '/')
   {
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Fist page</title></head>')
   res.write('<body><form action = "/message" method = "POST"> <input type = "text"> <button type = "submit" name = "message">send</button></form></body>')
   res.write('</html>');
   return res.end();
   }

   if (url === '/message' && method === 'POST')
   {
     const body = [];
    req.on('data',(chunk) =>
    {
      console.log(chunk);
      body.push(chunk);
    });
 
    return req.on('end',() =>
    {
      const parseBody = Buffer.concat(body).toString(); 
      //console.log(parseBody);
      const message = parseBody.split('=')[1];
      fs.writeFile('message.txt',message,err =>
      {
     //fs.writeFileSync('message.text', 'DUMMY');
     res.statusCode = 302;
     res.setHeader('location','/');
     return res.end();
    });
    });
  }
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Fist page</title></head>')
   res.write('<body><h1>This is Vijay</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);

