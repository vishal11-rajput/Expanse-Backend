const ExpenseSchema = require("../Model/ExpenseModel");

const createExpense = async(req,res)=>{
    try{
        const savedExpense = await ExpenseSchema.create(req.body);
        res.status(201).json({
            message: "Expense Created",
            data:savedExpense
        })
    }catch(error){
        res.status(500).json({
            message: " Error Creating",
            data: error,
            flag: -1
        })
    }
}

const getAllExpense = async(req,res)=>{
    try{
        const expense = await ExpenseSchema.find()
        res.status(200).json({
            message:"Get all Expenses",
            data:expense,
        })

    }catch(error){
        res.status(500).json({
            message: " Error Getting",
            data: error,
            flag: -1
        })
    }
}

const deleteExpense = async(req,res)=>{
    try{
        const id = req.params.id
        const deletedExpense = await ExpenseSchema.findByIdAndDelete(id)
        if(deletedExpense==null){
            res.status(404).json({
                message:"Expense Type not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Expense Type deleted successfully",
                flag:1,
                data:deletedExpense
            })
        }
    }catch(error){
        res.status(500).json({
            message: " Error deleting",
            data: error,
            flag: -1
        })
    }
}

const getExpenseById = async(req,res)=>{
    try{ 
        const id = req.params.id
        const expense = await ExpenseSchema.findById(id);
        if(expense==null){
            res.status(404).json({
                message:"Expense Type not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Expense Type found",
                flag:1,
                data:expense
            })

        }

    }catch(error){
        res.status(500).json({
            message: " Error getting by id",
            data: error,
            flag: -1
        })
    }
}   

const updateExpense = async(req,res)=>{
    const id = req.params.id
    const newExpense = req.body
    try{
        const updatedExpense = await ExpenseSchema.findByIdAndUpdate(id, newExpense)
        if(updatedExpense==null){
            res.status(404).json({
                message:"Expense not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Expense  updated successfully",
                flag:1,
                data:updatedExpense
               
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
    createExpense,
    getAllExpense,
    deleteExpense,
    getExpenseById,
    updateExpense
}