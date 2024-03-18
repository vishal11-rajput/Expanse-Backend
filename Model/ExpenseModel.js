const mongoose = require('mongoose');

const expenseSchemaSchema = new mongoose.Schema({
    amount:{
        type: Number,
        // required: true
    },
    TransDateTime:{
        type: Date,
        default: Date.now,
        // required: true
    },
    payee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payee'
    },
    category:{
        // type: String
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // subCategory:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'SubCategory'
    // },
    paymentMode:{
        type: String,
        // required: true
    },
    staus:{
        type: String,
        default: 'Cleared'
    },
    description:{
        type: String
    },
    billUrl:{
        type: String
    },
    
    type:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransactionType'
    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    }
})

module.exports = mongoose.model('Expense', expenseSchemaSchema);