import userModel from '../models/userModel.js';

const authentication = async (req,res) => {
    const { username,password } = req.body;

    try{
        if (!username || !password) {
        return res.status(400).json({message: "Something is missing"});
        }
        else{
        const newUser = new userModel({
            username,
            password,
        });
        await newUser.save();
        return res.status(200).json({message: "User registration is successfull"});
    }
    }
    catch(error) {
        return res.status(500).json({message:"Error occured while saving data"});
    }
};
export { authentication };