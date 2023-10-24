export const getInformation = async (req,res)=>{
    try{
        res.status(201).send("THIS IS THE RANDOM API WORKING ");
    }catch(error){
        res.status(400).send(error);
    }
}