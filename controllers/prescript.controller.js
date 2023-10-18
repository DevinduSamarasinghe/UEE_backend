import Prescript from "../model/prescript.model.js";
import User from "../model/user.model.js";

export const createPrescription = async(req,res)=>{
    try{
        const {patient, doctor, drugs} = req.body;

        let newPrescription = new Prescript({patient, doctor, drugs});
        await newPrescription.save();
        newPrescription = await newPrescription.populate("patient");
        newPrescription = await newPrescription.populate("doctor");
        return res.status(201).json(newPrescription);
    }catch(error){
        res.status(400).json("Error: " + error);
    }
}

export const getPrescriptionById = async(req,res)=>{
    try{
        const {id} = req.params;
        const prescription = await Prescript.findById(id);
        return res.status(200).json(prescription);

    }catch(error){  
        res.status(400).json("Error: "+error);
    }
}

export const deletePrescription = async(req,res)=>{
    try{
        const {id} = req.params;
        const prescription = await Prescript.findByIdAndDelete(id);
        return res.status(200).json({message: "Prescription deleted successfully", data: prescription});
    }catch(error){
        res.status(400).json("Error: "+error);
    }
}

export const getPrescriptionByClient = async(req,res)=>{
    try{
        const {client} = req.params;
        const prescription = await Prescript.findOne({patient: client});
        return res.status(200).json(prescription);
    }catch(error){
        res.status(400).json("Error: "+error);
    }
}

export const getPrescriptionByDoctor = async(req,res)=>{
    try{
        const {doctor} = req.params;
        const prescription = await Prescript.findOne({doctor});
        return res.status(200).json(prescription);
    }catch(error){
        res.status(400).json("Error: "+error )
    }
}