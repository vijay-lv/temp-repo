const authorize=(req,res,next)=>{
const user=req.query
console.log(user)
if(user.user === 'jhon'){
    
    req.user={name:'jhon',id:1}
    next()
}
else{
    res.status(401).send('Unauthorized')
}
}
module.exports=authorize