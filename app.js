const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const cors = require('cors');
app.use(cors());
app.use(express.json())


// connect mongoose

var db = mongoose.connect("mongodb://127.0.0.1:27017/expense-manager")

db.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err);
})

 
//routes

const userRoutes = require("./Routes/UserRoutes.js");
const categoryRoutes = require("./Routes/CategoryRoutes.js");
const expenseRoutes = require("./Routes/ExpenseRoutes.js");
const labelRoutes = require("./Routes/LabelRoutes.js");
const payeeRoutes = require("./Routes/PayeeRoutes.js");
const roleRoutes = require("./Routes/RoleRoutes.js");
const subCategoryRoutes = require("./Routes/SubCategoryRoutes.js");
const transactionRoutes = require("./Routes/TransactionTypeRoutes.js");
const uploadRoutes = require("./Routes/UploadRoutes.js")


// for login verify


app.use("/users", userRoutes)
app.use("/category", categoryRoutes)
app.use("/expenses", expenseRoutes) 
app.use("/label", labelRoutes)
app.use("/payee", payeeRoutes)
app.use("/role", roleRoutes)
app.use("/subCategory", subCategoryRoutes)
app.use("/transaction", transactionRoutes)
app.use("/upload",uploadRoutes)
app.post("/signup", (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employess => res.json(employess))
    .catch(err => res.json(err))
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`);
})