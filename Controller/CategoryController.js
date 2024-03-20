const CategorySchema = require("../Model/CategoryModel")

const createCategory = async (req, res) =>{

    try{
            const savedCat = await CategorySchema.create(req.body);
            res.status(201).json({
                message: "Category Created",
                data:savedCat
            })

        }catch(error){
                res.status(500).json({
                    message: "Server Error",
                    data:error,
                    flag: -1
                })

        }

}

const getAllCategory = async (req, res) => {


    try{

        const category = await CategorySchema.find()
        res.status(200).json({
            message:"Get all Category",
            data:category,
        })


    }catch(err){    

        res.status(500).json({
            message:"Error in getting all Account",
            data:err,
            flag:-1
        })

    }


}


const deleteCategory = async (req, res) => {

    try{
        const id = req.params.id
        const deletedCategory = await CategorySchema.findByIdAndDelete(id)
        if(deletedCategory==null){
            res.status(404).json({
                message:"Category not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Category deleted successfully",
                flag:1,
                data:deletedCategory
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in deleting Category",
            data:err,
            flag:-1
        })

    }

}

const getCategoryById = async (req, res) => {

    try{

        const id = req.params.id
        const category = await CategorySchema.findById(id)
        if(category==null){
            res.status(404).json({
                message:"Category not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Category found",
                flag:1,
                data:category
            })

        }


    }catch(err){
        res.status(500).json({
            message:"Error in getting Category by id",
            data:err,
            flag:-1
        })

    }


}


const updateCategory = async (req, res) => {

    const id = req.params.id
    const newCategory = req.body
    try{

        const updatedCategory = await CategorySchema.findByIdAndUpdate(id,newEmployee)
        if(updatedCategory==null){
            res.status(404).json({
                message:"Category not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Category updated successfully",
                flag:1,
               // data:updatedEmployee
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in updating Category",
            data:err,
            flag:-1
        })

    }


}



module.exports = {
    createCategory,
    getAllCategory,
    deleteCategory,
    getCategoryById,
    updateCategory
  };