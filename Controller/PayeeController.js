const PayeeSchema = require("../Model/PayeeModel");

const createPayee = async(req,res)=>{
    try{
        const savedPayee = await PayeeSchema.create(req.body)
        res.status(201).json({
            message: "Payee Created",
            data:savedPayee
        })

    }catch(error){
        res.status(500).json({
            message: " Error Updating",
            data: error,
            flag: -1
        })
    }
}

const getAllPayee = async(req,res)=>{
    try{
        const payee = await PayeeSchema.find().populate("user");
        res.status(200).json({
            message:"Get all Payees",
            data:payee,
        })
    }catch(error){
        res.status(500).json({
            message: " Error Updating",
            data: error,
            flag: -1
        })
    }
}

const deletePayee = async(req,res)=>{
    try{
        const id = req.prams.id
        const deletedPayee = await PayeeSchema.findByIdAndDelete(id);
        if(deletedPayee==null){
            res.status(404).json({
                message:"Payee not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Payee deleted successfully",
                flag:1,
                data:deletedPayee
            })
        }

    }catch(error){
        res.status(500).json({
            message: " Error Updating",
            data: error,
            flag: -1
        })
    }
}

const getPayeeById = async(req,res)=>{
    try{

        const id = req.params.id
        const payee= await PayeeSchema.findById(id)
        if(payee==null){
            res.status(404).json({
                message:"Payee not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Payee found",
                flag:1,
                data:payee
            })

        }

    }catch(error){
        res.status(500).json({
            message: " Error Updating",
            data: error,
            flag: -1
        })
    }
}

const updatePayee = async(req,res)=>{
    const id = req.params.id
    const newPayee = req.body
    try{
        const updatedPayee = await PayeeSchema.findByIdAndUpdate(id,newPayee)
        if(updatedPayee==null){
            res.status(404).json({
                message:"Payee not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Payee updated successfully",
                flag:1,
               // data:updatedPayee
            })
        }

    }catch(error){
        res.status(500).json({
            message: " Error Updating",
            data: error,
            flag: -1
        })
    }
}

module.exports = {
    createPayee,
    getAllPayee,
    deletePayee,
    getPayeeById,
    updatePayee
}