const express=require('express')

const app=express()

let rest=require('../data')


let pepl={
   getall:(req,res)=>{

        //let re=rest.filter((as)=>as.age>27)
        res.status(200).json({success:true,data:rest})

     },
    create:(req,res)=>{
        const {name}=req.body
        if(!name){
            return res.status(400).json({success:false,msg:'please provide name value'})
        }
        res.status(201).send({success:true,person:name})
    },

    dlete:(req,res)=>{

    const person=rest.find((person)=>person.id===Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person with id ${req.params.id}`})
    }
    console.log(req.params.id)
    const newPeople=rest.filter((person)=>person.id !==Number(req.params.id))
    console.log(newPeople)
    return res.status(200).json({success:true,data:newPeople})
    }
}
module.exports=pepl