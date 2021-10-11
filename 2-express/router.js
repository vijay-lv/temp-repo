const express=require('express')
const ppl = require('./controller/peopleController')
const router=express.Router()



// router.get('/',ppl.getall)
// router.post('/',ppl.create)
// router.delete('/:id',ppl.dlete)

router.route('/').get(ppl.getall)
router.route('/').post(ppl.create)
router.route('/:id').delete(ppl.dlete)


module.exports=router