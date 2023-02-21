const http = require('http'); // ./ will be file based, without that will look for global which  node module provides
const fs = require('fs'); // file system
/** createServer method expects a function 
that would accepts incoming requests and can send response and returns
a server instance
*/
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit()
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Page</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST"><input type="text"/><input type="submit" value="send"/>')
        res.write('</body>')
        res.write('</html>')
   return res.end();
    }
    if(req.url==="/message" && req.method==="POST"){
        fs.writeFileSync("message.txt","DUMMY");
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Page</title></head>')
    res.write('<body><h1>Hello World!</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);

