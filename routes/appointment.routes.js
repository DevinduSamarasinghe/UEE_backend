import express from 'express';
import {
    createAppointment,
    getAppointments,
    deleteAppointment,
    getAppointmentsByPatient,
    getAppointmentsByDoctor,
} from '../controllers/appointment.controller.js';

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get appointments by patient
router.get('/patient/:patientId', getAppointmentsByPatient);

// Get appointments by doctor
router.get('/doctor/:doctorId', getAppointmentsByDoctor);

// Delete an appointment by ID
router.delete('/:id', deleteAppointment);

export default router;
