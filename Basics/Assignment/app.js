const http = require('http');
const users =[];
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`<html>
                <body>
                    <h1>Welcome</h1>
                    <form action='/create-user' method='POST'>
                    <input name='username' type='text'/>
                    <button type='submit'>Create User</button>
                    </form>
                </body>
            </html>`);
        return res.end();

    }
    if(req.url==='/users'){
        res.write(`
                <html>
            <body>
                <ul>
                    ${users.map(user=>`<li>${user}</li>`)}
                </ul>
            </body>
        </html>`);
        return res.end();
    }
    if(req.url ==='/create-user' && req.method==='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
      return  req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            users.push(parsedBody.split('=')[1]);
            res.statusCode=302;
            res.setHeader("Location","/users");
            return res.end();
        })

    }
    
})
server.listen(3000)