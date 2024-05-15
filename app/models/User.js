import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    profilepic: {type: String}, 
    coverpic: {type: String}, 

});

const User = model('User', UserSchema);
export default mongoose.models.User || User ;