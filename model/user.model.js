import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firebaseId:{
        type: String,
        required: true
    },
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
    },
    specialization: {
        type: String
    },
    workPlace: {
        type: String,
        default: 'Lady Ridgeway Hospital, Colombo-10'
    },
    workingHours: {
        type: String,
        default: '9AM - 5PM'
    },
    charges: {
        type: Number,
        default: 2000
    },
    about: {
        type: String,
        default: 'General Practitioner'
    },
})

const User = mongoose.model("User", UserSchema);
export default User;