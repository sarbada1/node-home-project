import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,

    },
    gender: {
        type: String,
        enum:["male","female"],
        required: true,
    },
    role: {
        type: String,
        enum:["admin","user"],
       
    }
},{
    versionKey:false
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password, 10);
})

export default mongoose.model('UserData', userSchema);