const SubCategorySchema = require("../Model/SubCategoryModel")

const createSubCategory = async (req, res) =>{

    try{
            const savedSubCategory = await SubCategorySchema.create(req.body);
            res.status(201).json({
                message: "Sub Category Created",
                data:savedSubCategory
            })

        }catch(error){
                res.status(500).json({
                    message: "Server Error",
                    data:error,
                    flag: -1
                })

        }

}

const getAllSubCategory = async (req, res) => {


    try{

        const subcategory = await SubCategorySchema.find().populate("category");
        res.status(200).json({
            message:"Get all Sub Category",
            data:subcategory,
        })


    }catch(err){

        res.status(500).json({
            message:"Error in getting all Sub Category",
            data:err,
            flag:-1
        })

    }


}


const deleteSubCategory = async (req, res) => {

    try{
        const id = req.params.id
        const deletedSubCategory = await SubCategorySchema.findByIdAndDelete(id)
        if(deletedSubCategory==null){
            res.status(404).json({
                message:"Sub Category not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Sub Category deleted successfully",
                flag:1,
                data:deletedSubCategory
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in deleting Sub Category",
            data:err,
            flag:-1
        })

    }

}

const getSubCategoryById = async (req, res) => {

    try{

        const id = req.params.id
        const subCategory = await SubCategorySchema.findById(id)
        if(subCategory==null){
            res.status(404).json({
                message:"Sub Category not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Sub Category found",
                flag:1,
                data:subCategory
            })

        }


    }catch(err){
        res.status(500).json({
            message:"Error in getting Sub Category by id",
            data:err,
            flag:-1
        })

    }


}


const updateSubCategory = async (req, res) => {

    const id = req.params.id
    const newSubCategory = req.body
    try{

        const updatedSubCategory = await SubCategorySchema.findByIdAndUpdate(id,newSubCategory)
        if(updatedSubCategory==null){
            res.status(404).json({
                message:"Sub Category not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Sub Category updated successfully",
                flag:1,
               // data:updatedEmployee
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in updating Sub Category",
            data:err,
            flag:-1
        })

    }


}



module.exports = {
    createSubCategory,
    getAllSubCategory,
    deleteSubCategory,
    getSubCategoryById,
    updateSubCategory
  };