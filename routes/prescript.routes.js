import express from 'express';
import { createPrescription, getPrescriptionById, deletePrescription, getPrescriptionByClient, getPrescriptionByDoctor} from '../controllers/prescript.controller.js';

const router = express.Router();

router.post('/',createPrescription);
router.get('/:id',getPrescriptionById);
router.get('/client/:client',getPrescriptionByClient);
router.get('/doctor/:doctor',getPrescriptionByDoctor)
router.delete('/:id',deletePrescription);


export default router;