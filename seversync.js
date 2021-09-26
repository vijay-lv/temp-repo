const http=require('http')

const fs=require('fs')

http.createServer((req,res)=>{

    const file=fs.createReadStream('./content/sub/bigfile.txt','utf8');

    file.on('open',()=>{

        file.pipe(res)
    })
    file.on('err',(err)=>{

        res.end(err)
    })
}).listen(5000)