import User from "../model/user.model.js";

export const getUsers = async(req,res)=>{

    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error){
        res.status(400).json("Error: "+error);
    }
}

export const getUserbyEmail = async(req,res)=>{
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        return res.status(200).json(user);  

    }catch(error){
        res.status(400).json('Error: '+error);
    }
}

export const signUpUser = async(req,res)=>{
    try{

        const {firstName, lastName, email, role, password} = req.body;

        
        const ifUser = await User.findOne({email});
        if(ifUser){
            return res.status(200).json("User already exists. Please login to continue");
        }

        const newUser = new User({firstName, lastName, email, role, password});
        await newUser.save();
        return res.status(201).json(newUser);

    }catch(error){
        res.status(400).json("Error: "+error);
    }
}

export const signInUser = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email, password: password});
        return res.status(200).json(user);

    }catch(error){
        res.status(400).json("Error: "+ error);
    }
}

