const exxpress=require('express')
const data=require('./controller/controller.js')
const roter=exxpress.Router()

roter.get('/',data.getall)
roter.post('/',data.create)
roter.delete('/:id',data.dlt)
roter.get('/:id',data.getOne)
roter.put('/:id',data.update)
module.exports=roter