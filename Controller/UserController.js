const UserSchema = require("../Model/UserModel.js");

const createUsers = async (req, res) => {
  try {
    const savedUser = await UserSchema.create(req.body);
    res.status(201).json({
      message: "Created user",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      data: error,
      flag: -1,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserSchema.find().populate("role");
    res.status(200).json({
      message: "Get all users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      data: error,
      flag: -1,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    const deletedUser = await UserSchema.findByIdAndDelete(id);
    if (deletedUser == null) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Delete user by id",
        data: deletedUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: error,
      flag: -1,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSchema.findById(id);
    if (user == null) {
      res.status(400).json({
        message: "User not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "User found",
        data: user,
        flag: 1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: error,
      flag: -1,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = req.body;
    const updateUser = await UserSchema.findByIdAndUpdate(id, newUser);
    if (updateUser == null) {
      res.status(400).json({
        message: "User not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: " User Updated",
        flag: 1,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: error,
      flag: -1,
    });
  }

}

// for user login verification

const loginUser = async(req,res)=> {
  
    const {email, password} = req.body;
    UserSchema.findOne({email: email})
    .then(user => {
      if (user){
        if(user.password === password){
          res.json("Success")
        } else{
          res.json("Incorrect password")
        }
      }else{
        res.json("User Login detail not found")
      }
    })
  
}


module.exports = {
  createUsers,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
  loginUser,
};
