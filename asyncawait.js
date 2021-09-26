
const {readFile, read}=require("fs")
const util=require('util')

//const readfile=util.promisify(readFile)
const readfile=util.promisify(readFile)
// const nert=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{

//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

const nexr=async()=>{
    try{ 
        const first= await readfile('./content/sub/first.txt','utf8')
        const second= await readfile('./content/sub/second.txt','utf8')
        console.log(first,second)
    }
    catch(error){

        console.log(error+"vijay")
    }
    
}
nexr()
// nert('./content/sub/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))