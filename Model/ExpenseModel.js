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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        // required: true
    },
    subCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    paymentMethod:{
        type: String
    },
    staus:{
        type: String,
        default: 'Cleared'
    },
    description:{
        type: String
    },
    type:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransactionType'
    }
})

module.exports = mongoose.model('Expense', expenseSchemaSchema);