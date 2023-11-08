const express=require('express')

const protect = require('../Token')


const Dest = require('../Controller/Destdata')
const getdata = require('../Controller/Getalldata')



const middleware=[protect]
const router=express.Router()





router.route('/get').get(getdata)

router.route('/CreateDest').post(Dest)







module.exports=router