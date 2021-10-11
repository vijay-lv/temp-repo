const express=require('express')
const rt=require('./rote')
//const {urlencoded}=express.urlencoded
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',rt)
app.listen(4000,()=>{

    console.log('app listening....')
})