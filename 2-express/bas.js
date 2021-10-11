const http=require('http');
const {readFileSync}=require('fs');

const home=readFileSync('./index.html');
const server=http.createServer((req,res)=>{
    //console.log(req.method)
    if(req.url==='/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(home);
    res.end()
    } 
    else if(req.url==='/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>This is about page</h1>');
    res.end()  
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
    }
});

server.listen(3000)