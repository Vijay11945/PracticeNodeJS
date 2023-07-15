//const http = require('http');
const fs = require('fs');

const server = (req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];
  if (url === '/') 
  {
    const filepath = path.join(__dirname,"message.text");

    fs.readFile("message.text", {encoding: "utf-8"},(err,data) => {
      if(err)
      {
        console.log(err);
      }
    console.log('data from file'+data);
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body>${data}</body>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }) 
  }
  else if(url === "/message" && method === "POST") {
    req.on("data",(chunk)=> {
     body.push(chunk);
    });
    return req.on("end",()=> {
      const parsedBody = Buffer.concat(body).toString();
      console.log('parsedbody>>>>',parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text",message,(err)=>{
        if(err)
        {
          console.log(err);
        }
        console.log('inside fs.writefile');
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
      })
    })
  }
  else {
  res.setHeader("Content-Type","text/html")
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from Node JS</h1></body>');
  res.write('</html>');
  res.end();
  }
};
module.exports = server;
//server.listen(4000);
