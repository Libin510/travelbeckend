const mongoose=require('mongoose')


const destination=mongoose.Schema({
    
    ImgSrc:{type:String},
    DestTitle:{type:String},
    Place:{type:String},
    Grade:{type:String},
    Fees:{type:Number},
    Description:{type:String},
    
})

const Destinations=mongoose.model("Destination",destination)

module.exports=Destinations