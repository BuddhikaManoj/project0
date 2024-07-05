import userModel from '../models/userModel.js';
import bcrypt from "bcryptjs"

const authentication = async (req,res) => {
    const { username,password,role } = req.body;
console.log(username,password,role);
    try{
        if (!username || !password) {
        return res.status(400).json({message: "Something is missing"});
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            username,
            password : hashedPassword,
            role,
        });
        await newUser.save();
        return res.status(200).json({message: "User registration is successfull"});
    }

    catch(error) {
        return res.status(500).json({message:"Error occured while saving data"});
    }
};

const loginData = async (req,res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res .status(400).json({message:"Invalid username or password"});
    }
    const oldUser = await userModel.findOne({username});
    if(!oldUser){
        return res .status(400).json({message:"Invalid username or password"});
    }
    const isPassowrdCorrect = await bcrypt.compare(password,oldUser.password);
    if(isPassowrdCorrect){
        return res .status(200).json({message:"Successfully logged in", data:oldUser});
    }
}
export { authentication,loginData };