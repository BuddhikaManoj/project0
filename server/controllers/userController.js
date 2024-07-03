import userModel from '../models/userModel.js';

const authentication = async (req,res) => {
    const { username,password,roll } = req.body;

    try{
        if (!username || !password) {
        return res.status(400).json({message: "Something is missing"});
        }
        else{
        const newUser = new userModel({
            username,
            password,
            roll
        });
        await newUser.save();
        return res.status(200).json({message: "User registration is successfull"});
    }
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
    if(oldUser.password===password){
        return res .status(200).json({message:"Successfully logged in", data:oldUser});
    }
}
export { authentication,loginData };