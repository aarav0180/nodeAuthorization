const bcrypt = require('bcrypt'); 
const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');

const signup = async (req , res)=>{
    try{
        const {name , email , password} = req.body;
        const user = await UserModel.findOne({email});
        if( user ){
            return res.status(409)
                .json({message : "Users already Exists" , success : false});
        }
        const userModel = new UserModel({name , email , password});
        usermodel.password = await bcrypt.hash(password , 29);
        await userModel.save();
        res.status(201)
            .json({message :"SignUp Successfully" , 
                success : true
            })
    } catch(err){
        res.status(500)
        .json({
            message : "Internal server Error",
            success : false
        })
    }
}

const login = async (req , res)=>{
    try{
        const {email , password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user ){
            return res.status(403)
                .json({message : "Authentication Failed , somthing wrong" , success : false});
        }
        const isTrue = await bcrypt.compare(password , user.password);
        if(!isTrue){
            return res.status(403)
                .json({message : "Authentication Failed , somthing wrong" , success : false});
        }
        const jwtToken = jwt.sign({email : user.email , _id : user._id},process.env.Secret , {expiresIn : '1h'})
        res.status(200)
            .json({message :"Login Successfully" , 
                success : true,
                jwtToken,
                email,
                name : user.name
            })
    } catch(err){
        res.status(500)
        .json({
            message : "Internal server Error",
            success : false
        })
    }
}

module.exports = {
    login,
    signup
}