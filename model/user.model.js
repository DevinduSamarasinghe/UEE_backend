import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String, 
        required: [true, 'Please insert an email'],
    },
    role: {
        type: String,
        enum: ['doctor', 'client', 'pharma','admin'],
        required: [true, 'Please select the role for the user']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password']
    }
})

const User = mongoose.model("User", UserSchema);
export default User;