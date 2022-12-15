const mongoose = require("mongoose")

const bookmarkSchema=new mongoose.Schema({
    title:{type:String,},
    quantity:{type:Number},
    priority:{type:String},
    discription:{type:String},
})

const BookmarkModel=mongoose.model("bookmark",bookmarkSchema)


module.exports={BookmarkModel}