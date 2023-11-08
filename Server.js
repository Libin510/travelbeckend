const express=require('express')
const connectDBS=require("./Database/DataSystem")
const router=require('./Router/Newroute')
const dotenv=require('dotenv')
const cors=require('cors')


const app=express()

app.use(express.json())

app.use(cors())

connectDBS()
dotenv.config()

app.use('/',router)



const PORT=process.env.PORT || 4000;

 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))