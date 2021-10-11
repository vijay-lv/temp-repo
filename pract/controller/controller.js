const express=require('express')
const app=express()
let data=require('../data')
let art={

    getall:(req,res)=>{
        
        res.status(200).json({success:true,data:data})

    },
    create:(req,res)=>{
        const {name}=req.body

        if(!name){
            return res.status(401).json({success:false,msg:'please provide correct value'})
        }
        else{
          const re=data.push(req.body)
            return res.status(201).send({success:true,person:re})
        }
       
    },

    dlt:(req,res)=>{

        const id=req.params.id
        const ret=data.filter((as)=>as.id!==+id)

        res.status(200).json({success:true,data:ret})
    },
    getOne:(req,res)=>{

        const id=req.params.id
        const ret=data.filter((as)=>as.id===+id)
        if(ret.length<1){
          return  res.status(401).json({success:false,msg:"plz give the valid value"})
        }
        res.status(201).json({success:true,data:ret})


    },
    update:(req,res)=>{

        const id=req.params.id

        const ret=data.filter((as)=>as.id===+id)

        if(ret.length>0){
            ret.map((as)=>{
                as.name=req.body.name
                as.age=req.body.age
                return as
            })
            res.status(200).json({success:true,data:ret})
        }
        else{
            res.status(400).send({success:false,msg:'invalid input'})
        }

    }
      
}
module.exports=art