const TransactionTypeSchema = require("../Model/TransactionTypeModel")

const createTransactionType = async (req, res) =>{

    try{
            const savedTransaction = await TransactionTypeSchema.create(req.body);
            res.status(201).json({
                message: "Transaction Type Created",
                data:savedTransaction
            })

        }catch(error){
                res.status(500).json({
                    message: "Server Error",
                    data:error,
                    flag: -1
                })

        }

}

const getAllTransactionType = async (req, res) => {


    try{

        const transaction = await TransactionTypeSchema.find()
        res.status(200).json({
            message:"Get all Transaction Type",
            data:transaction,
        })


    }catch(err){

        res.status(500).json({
            message:"Error in getting all Transaction",
            data:err,
            flag:-1
        })

    }


}


const deleteTransactionType = async (req, res) => {

    try{
        const id = req.params.id
        const deletedTransactionType = await TransactionTypeSchema.findByIdAndDelete(id)
        if(deletedTransactionType==null){
            res.status(404).json({
                message:"Transaction Type not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Transaction Type deleted successfully",
                flag:1,
                data:deletedTransactionType
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in deleting Transaction Type",
            data:err,
            flag:-1
        })

    }

}

const getTransactionTypeById = async (req, res) => {

    try{

        const id = req.params.id
        const transactionType = await TransactionTypeSchema.findById(id)
        if(transactionType==null){
            res.status(404).json({
                message:"Transaction Type not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Transaction Type found",
                flag:1,
                data:transactionType
            })

        }


    }catch(err){
        res.status(500).json({
            message:"Error in getting Transaction Type by id",
            data:err,
            flag:-1
        })

    }


}


const updateTransactionType = async (req, res) => {

    const id = req.params.id
    const newTransactionType = req.body
    try{

        const updatedTransactionType = await TransactionTypeSchema.findByIdAndUpdate(id,newTransactionType)
        if(updatedTransactionType==null){
            res.status(404).json({
                message:"Transaction Type not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Transaction Type updated successfully",
                flag:1,
               // data:updatedTransaction
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in updating Transaction Type",
            data:err,
            flag:-1
        })

    }


}



module.exports = {
    createTransactionType,
    getAllTransactionType,
    deleteTransactionType,
    getTransactionTypeById,
    updateTransactionType
  };