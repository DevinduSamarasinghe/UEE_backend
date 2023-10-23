import Appointment from '../model/appointment.model.js';

export const createAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, date, time } = req.body;

        const newAppointment = new Appointment({ patientId, doctorId, date, time });
        await newAppointment.save();
        return res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        return res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};

export const getAppointmentsByPatient = async (req, res) => {
    try {
        const { patientId } = req.params;
        const appointments = await Appointment.find({ patientId });
        return res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};

export const getAppointmentsByDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const appointments = await Appointment.find({ doctorId });
        return res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};


export const deleteAppointment = async (req, res) => {
    try {
        const {id} = req.params;

        // Check if the appointment exists
        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json('Appointment not found');
        }

        // Delete the appointment
        await Appointment.findByIdAndDelete(id);
        return res.status(200).json('Appointment deleted');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};

