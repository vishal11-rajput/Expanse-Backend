const LabelSchema = require("../Model/LabelModel");

const createLabel = async(req,res)=>{
    try{
        const savedLabel = await LabelSchema.create(req.body);
        res.status(201).json({
            message: "Label Created",
            data:savedLabel
        })
    }catch(error){
        res.status(500).json({
            message: " Error creating",
            data: error,
            flag: -1
        })
    }
}

const getAllLabel = async(req,res)=>{
    try{
        const label = await LabelSchema.find()
        res.status(200).json({
            message:"Get all Labels",
            data:label,
        })
    }catch(error){
        res.status(500).json({
            message: " Error Getting",
            data: error,
            flag: -1
        })
    }
}

const deleteLabel = async(req,res)=>{
    try{
        const id = req.params.id
        const deletedLabel = await LabelSchema.findByIdAndDelete(id)
        if(deletedLabel==null){
            res.status(404).json({
                message:"Label not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Label deleted successfully",
                flag:1,
                data:deletedLabel
            })
        }
    }catch(error){
        res.status(500).json({
            message: " Error Deleting",
            data: error,
            flag: -1
        })
    }
}

const getLabelById = async(req,res)=>{
    try{
        const id = req.params.id
        const label = await LabelSchema.findById(id)
        if(label==null){
            res.status(404).json({
                message:"Label not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Label found",
                flag:1,
                data:label
            })

        }
    }catch(error){
        res.status(500).json({
            message: " Error getting",
            data: error,
            flag: -1
        })
    }
}

const updateLabel = async(req,res)=>{
    const id = req.params.id
    const newLabel = req.body
    try{
        const updatedLabel = await LabelSchema.findByIdAndUpdate(id, newEmployee)
        if(updatedLabel==null){
            res.status(404).json({
                message:"Label not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Label updated successfully",
                flag:1,
               
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

module.exports={
    createLabel,
    getAllLabel,
    deleteLabel,
    getLabelById,
    updateLabel
}