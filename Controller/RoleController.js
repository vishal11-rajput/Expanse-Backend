const RoleSchema = require("../Model/RoleModel")

const createRole = async (req, res) =>{

    try{
            const savedRole = await RoleSchema.create(req.body);
            res.status(201).json({
                message: "Role Created",
                data: savedRole
            })

        }catch(error){
                res.status(500).json({
                    message: "Server Error",
                    data:error,
                    flag: -1
                })

        }

}

const getAllRole = async (req, res) => {


    try{

        const role = await RoleSchema.find()
        res.status(200).json({
            message:"Get all Role",
            data:role,
        })


    }catch(err){

        res.status(500).json({
            message:"Error in getting all Role",
            data:err,
            flag:-1
        })

    }


}


const deleteRole = async (req, res) => {

    try{
        const id = req.params.id
        const deletedRole = await RoleSchema.findByIdAndDelete(id)
        if(deletedRole==null){
            res.status(404).json({
                message:"Role not found",
                flag:-1
            })
        }
        else{
            res.status(200).json({
                message:"Role deleted successfully",
                flag:1,
                data:deletedRole
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in deleting Role",
            data:err,
            flag:-1
        })

    }

}

const getRoleById = async (req, res) => {

    try{

        const id = req.params.id
        const Role = await RoleSchema.findById(id)
        if(Role==null){
            res.status(404).json({
                message:"Role not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Role found",
                flag:1,
                data:Role
            })

        }


    }catch(err){
        res.status(500).json({
            message:"Error in getting Role by id",
            data:err,
            flag:-1
        })

    }


}


const updateRole = async (req, res) => {

    const id = req.params.id
    const newRole = req.body
    try{

        const updatedRole = await RoleSchema.findByIdAndUpdate(id,newRole)
        if(updatedRole==null){
            res.status(404).json({
                message:"Role not found",
                flag:-1

            })
        }else{
            res.status(200).json({
                message:"Role updated successfully",
                flag:1,
               // data:updatedEmployee
            })
        }

    }catch(err){

        res.status(500).json({
            message:"Error in updating Role",
            data:err,
            flag:-1
        })

    }


}



module.exports = {
    createRole,
    getAllRole,
    deleteRole,
    getRoleById,
    updateRole
  };