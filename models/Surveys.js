const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientsSchema = require('./Recipients');

const surveysSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String,required: true},
    subject : {type: String, required: true},
    recipients: [RecipientsSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'users'},
    dateSent: Date,
    lastResponded: Date
})

mongoose.model('surveys', surveysSchema);