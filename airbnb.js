const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const CustomerModel=require('./models/Customer')

const backend_name=express()
backend_name.use(express.json())
backend_name.use(cors())

mongoose.connect("mongodb+srv://mounikpalasamudram:mnkdatabase@cluster0.dlxypkg.mongodb.net/");

backend_name.post("/login",(req,res) => {
    const {email,password} =req.body;
    CustomerModel.findOne({email:email})
    .then(user=> {
        if(user){
        if(user.password===password){
            res.json("Success")
        } else{
            res.json("Password incorrect")
        }
    } else{
        res.json("No record exists")
    }

    })
})
backend_name.post('/register',(req,res) =>{
CustomerModel.create(req.body)
.then(employees => res.json(Customers))
.catch(err => res.json(err))
} )

backend_name.listen(3001,() => {
    console.log("server is running")
})


