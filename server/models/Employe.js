
const mongoose = require('mongoose')


const EmplyeeSchema= new mongoose.Schema({
    name :String,
    email:String,
    password:String
})


const EmployeeModel = mongoose.model("employees",EmplyeeSchema)
module.exports=EmployeeModel