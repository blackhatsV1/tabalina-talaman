const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        fs.readFile('index.html', 'utf-8', (err, data) =>{
            if(err){
                res.statusCode = 500;
                res.end('Error loading the HTML file')
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    }
})

server.listen(5002, ()=>{
    console.log("Server at 5002...");
})