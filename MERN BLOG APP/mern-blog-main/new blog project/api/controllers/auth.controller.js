import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    console.log("Request body:", req.body); 
    if(!username || !email || !password || password=='' || username=='' || email=='') {
        next(errorHandler(400,'All fields are required'));
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);

    const newUser = new User({username, email, password:hashedPassword});  
    try {
        await newUser.save();
        res.status(201).json({ message: "User created" });
    } catch (error) {
        next(error);
    }
};
