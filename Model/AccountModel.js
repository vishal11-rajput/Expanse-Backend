const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
   createdAt:{
    type: Date,
    default: Date.now,
    required: true
   },
   balance:{
    type: Number,
    required: true,
    default: 0
   },
   currencyType:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CurrencyTYpe',
    required: true
   },
   default:{
    type: Boolean,
    default: false,
   },
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
   },
   accountType:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AccountType',
    required: true
   } 
})

module.exports = mongoose.model('Account', accountSchema);