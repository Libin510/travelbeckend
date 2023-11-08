const express=require('express')

const Destinations=require('../Schema/Destinations')

const app=express()

const getdata=async (req,res)=>{
    const data=await Destinations.find()
    res.json(data)
}

module.exports =getdata