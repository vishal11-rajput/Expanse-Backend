const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema({
    labelName:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Label', labelSchema);