const {createReadStream}=require('fs')

const stream=createReadStream('./content/sub/bigfile2.txt')

stream.on('data',(result)=>{

    console.log(result)
})