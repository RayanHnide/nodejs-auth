
const mongoose = require('mongoose')
 
const PostSchema = new mongoose.Schema({
    title: String,
    content: String
})

const PostModel = mongoose.model("posts", PostSchema)
 module.exports= PostModel


 