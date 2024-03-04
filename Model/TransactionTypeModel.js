const mongoose = require('mongoose');

const transactionTypeSchema = new mongoose.Schema({
   expense: {
    type: String,
    required: true,
   },
   income:{
      type: String,
      required: true,

   } 
})

module.exports = mongoose.model('TransactionType', transactionTypeSchema);