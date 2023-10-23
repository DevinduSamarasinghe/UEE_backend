import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,  // Assuming patientId and doctorId are ObjectIds
        ref: 'User',  // Reference to the User model
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
