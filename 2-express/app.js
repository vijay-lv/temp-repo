const { urlencoded } = require('express')
const express=require('express')
const app=express()
const rout=require('./router.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',rout)

app.listen(5000,()=>{
    console.log('server is listening.....')
})
