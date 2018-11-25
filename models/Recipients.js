const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientsSchema = new Schema({
    email: {type: String, required: true},
    responded: {type: Boolean,required: true},
   
})

module.exports = recipientsSchema;