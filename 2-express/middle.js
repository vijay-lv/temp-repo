const express=require('express')
const app=express()
const morgan=require('morgan')
const logger=require('./logger')
const auth=require('./authorize')
//req=> middleware => res
//our own middleware
app.use([logger,auth])
//express middleware
//app.use(express.static('./public'))
//third party middleware
//app.use(morgan('tiny'))
app.get('/',(req,res)=>{
    console.log(req.user)
    res.send('Home page')

})

app.get('/about',(req,res)=>{

    res.send('About page')

})
app.listen(5000,()=>{
    console.log('server is listening.....')
})
