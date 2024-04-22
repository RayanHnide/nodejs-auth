    const express= require('express')
    const mongoose = require('mongoose')
    const cors = require('cors')

    const EmployeeModel = require('./models/Users')
    const PostModel = require('./models/AddPost')

    const app=express()
    app.use(express.json())

    app.use(cors())

    mongoose.connect('mongodb+srv://engrayanhnide98:rayanrama123123123@logindatabase.t6evap1.mongodb.net/?retryWrites=true&w=majority&appName=loginDataBase').then(()=>{
        console.log('success');
    }).catch((err)=>{
        console.log('ERROR:error',err);
    })

    app.use(cors(
        {
            origin:'https://node-auth-ywg3.vercel.app',
            methods:['GET','POST','DELETE'],
            credentials:true
        }
    ))

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

    app.get('/users', (req, res) => {
        EmployeeModel.find()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

     
    app.delete('/user/:id', (req, res) => {
        const userId = req.params.id;
        EmployeeModel.findByIdAndDelete(userId)
            .then(() => {
                res.json({ message: 'User deleted successfully' });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'Failed to delete user' });
            });
    });

   
    app.post('/post', (req, res) => {
        const { title, content } = req.body;
        const newPost = {
            title: title,
            content: content
        };
        PostModel.create(newPost)
            .then(post => {
                console.log('Post created successfully:', post);
                res.json({ message: 'Post created successfully', post: post });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'Failed to create post' });
            });
    });



    app.get('/AllPost', (req, res) => {
        PostModel.find()
            .then(posts => {
                res.json(posts);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'Failed to fetch posts' });
            });
    });
    

