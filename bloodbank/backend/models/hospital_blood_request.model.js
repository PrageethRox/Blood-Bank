const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var DateOnly = require('dateonly');

//hospital blood request schema
var Hospital_Blood_Request = mongoose.model('Hospital_Blood_Request', {
    hospital_id: {
        type: String,
        required: 'Hospital Id can\'t be empty',
    },
    hospital_name: {
        type: String,
        required: 'Hospital Name can\'t be empty',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    address: {
        type: String,
        required: 'Address can\'t be empty',
    },
    contact: {
        type: String,
        required: 'Contact Number can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
    },
    blood_group: {
        type: String,
        required: 'Blood Group can\'t be empty',
    },
    quantity: {
        type: String,
        required: 'Quantity can\'t be empty',
    },
    order_status: {
        type: String,
        default: 'Pending',
    },
});

module.exports = { Hospital_Blood_Request };