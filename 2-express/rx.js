const express=require('express')

const app=express();
const data=require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
let prod=data;
    let few =prod.filter((as)=>as.age>=27)
    res.json(few)
}) 
app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params)
    let prod=data;
    let ids=req.params.productID
    let few=prod.find((as)=>as.id===+ids)
        //let few =prod.filter((as)=>as.age>=27)

        if(!few){
           res.status(404).send("product not found")
        }
        res.json(few)
    }) 
app.listen(5000,()=>{ 

console.log('server is running....')
})