import Prescript from "../model/prescript.model.js";
import User from "../model/user.model.js";

export const createPrescription = async(req,res)=>{
    try{

        console.log("Get CALLED SUCKA");
        const {patient, doctor, drugs, remark} = req.body;

        let newPrescription = new Prescript({patient, doctor, remark,drugs});
        await newPrescription.save();
        newPrescription = await newPrescription.populate("patient");
        newPrescription = await newPrescription.populate("doctor");
        return res.status(201).json(newPrescription);
    }catch(error){
        res.status(400).json("Error: " + error.message);
    }
}

export const getPrescriptionById = async(req,res)=>{
    try{
        const {id} = req.params;
        const prescription = await Prescript.findById(id).populate("patient").populate("doctor");
        return res.status(200).json(prescription);

    }catch(error){  
        res.status(400).json("Error: "+error.message);
    }
}

export const deletePrescription = async(req,res)=>{
    try{
        const {id} = req.params;
        const prescription = await Prescript.findByIdAndDelete(id);
        return res.status(200).json({message: "Prescription deleted successfully", data: prescription});
    }catch(error){
        res.status(400).json("Error: "+error.message);
    }
}

export const getPrescriptionByClient = async(req,res)=>{
    try{
        const {client} = req.params;
        const prescription = await Prescript.findOne({patient: client});
        return res.status(200).json(prescription);
    }catch(error){
        res.status(400).json("Error: "+error.message);
    }
}

export const getPrescriptionByDoctor = async(req,res)=>{
    try{
        const {doctor} = req.params;
        const prescription = await Prescript.findOne({doctor});
        return res.status(200).json(prescription);
    }catch(error){
        res.status(400).json("Error: "+error.message )
    }
}

export const getAllPrescriptions = async(req,res)=>{
    try{
        const prescriptions = await Prescript.find().populate("patient").populate("doctor");
        return res.status(200).json(prescriptions);
    }catch(error){
        res.status(400).json("Error: "+error.message);
    }
}