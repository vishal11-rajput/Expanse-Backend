// Not needed for now

const mongoose = require('mongoose');

const accountTypeSchema = mongoose.Schema({
    TypeName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('AccountType', accountTypeSchema);