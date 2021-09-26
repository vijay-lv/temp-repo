const http=require('http')

const server=http.createServer((req,res)=>{

// res.write("hi there server is running")
// res.end();
if(req.url==='/'){

    res.end('here is our home page')
}
if(req.url==='/about'){

    res.end('heare is our about page')
} 
 
res.end("ooppsssss")

}) 
server.listen(3000);