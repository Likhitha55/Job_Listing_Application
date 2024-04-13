const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    type: {
        type:String,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;