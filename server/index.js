    const express= require('express')
    const mongoose = require('mongoose')
    const cors = require('cors')

    const EmployeeModel = require('./models/Employe')

    const app=express()
    app.use(express.json())

    app.use(cors())

    mongoose.connect('mongodb+srv://engrayanhnide98:rayanrama123123123@logindatabase.t6evap1.mongodb.net/?retryWrites=true&w=majority&appName=loginDataBase').then(()=>{
        console.log('success');
    }).catch((err)=>{
        console.log('ERROR:error',err);
    })


    app.listen(3001,()=>{
        console.log('server is running');
    })
    app.post('/login',(req,res)=>{
       const {email,password} = req.body
       EmployeeModel.findOne({email:email})
       .then((user)=>{
        if(user){
            if(user.password === password){
                res.json('success')
            }
            else{
                res.json('the password is nodt correct')
            }
        }
        else{
            res.json('no record existed')
        }
       })
    })
    app.post('/register',(req,res)=>{
        EmployeeModel.create(req.body).then(employees=>res.json(employees)).catch(err=>console.log(err))
    })