const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    age:Number,
    favoritsFood:[String]
});

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
