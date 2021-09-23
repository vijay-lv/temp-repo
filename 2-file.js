const fs = require('fs')

const path=require('path')

fs.readFile('./content/sub/first.txt','utf8',(err,result)=>{

if(err){
    console.log(err);
    return;
}
console.log(result)
})

fs.writeFile('./content/sub/new1.txt','this is my second new file',(err,result)=>{

    if(err){

        console.log(err)
        return;
    }

    console.log(result)
})