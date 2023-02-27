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
        res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit" value="send">Send</button>')
        res.write('</body>')
        res.write('</html>')
   return res.end();
    }
    if(req.url==="/message" && req.method==="POST"){
        const body = [];
        req.on('data', (chunk) => {
            //the request body is coming in sequenitally.
            console.log(chunk);
            body.push(chunk);
        });

        //earlier the return state would be out of the req.on()
        //it establishes the event driven asychoronous mechanism.
      return  req.on('end', () => {
        /** This would execute the movement the server stop receving data from requestbody. 
After 7 seconds it would return response
if there is no return statement on 30, it wouldn't stop for req.on('end') execution
instead would register and move to next instruction.*/
           setTimeout(()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt",message,(err)=>{
                //This is asynchronous fs.write method . which wouldn't block the exection
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            })
          //  fs.writeFileSync("message.txt",message); This is a synchronousfunction means blocks the execution
           },7000)
            
        })
        
        
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Page</title></head>')
    res.write('<body><h1>Hello World!</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);

