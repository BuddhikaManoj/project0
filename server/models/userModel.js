import mongoose from "mongoose";

const { Schema } = mongoose;

const userRegistrationSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required:true,
        },
        role:{
            type: String,
            required:true,
        }
    },
    {
        timestamps: true,
      }
) 
export default mongoose.model('User Details',userRegistrationSchema);