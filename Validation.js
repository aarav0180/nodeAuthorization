const Joi = require('joi');

const signupValidation = (req , res , next) =>{
    const Schema = Joi.object({
        name : Joi.string().min(5).max(10).required(),
        email : Joi.email().required(), 
        password : Joi.string().min(6).max(20).required(),
    });
    const {error} = schema.Validate(req.body);
    if(error){
        return res.status(400)
            .json({message : "bad request" , error})
    }
    next();
}

const loginValidation = (req , res , next) =>{
    const Schema = Joi.object({
        email : Joi.email().required(), 
        password : Joi.string().min(6).max(20).required(),
    });
    const {error} = schema.Validate(req.body);
    if(error){
        return res.status(400)
            .json({message : "bad request" , error})
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}