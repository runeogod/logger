let mongoose = require('mongoose')

let ogenErrorReporting = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    function: { type: String },
    file: { type: String },
    line: { type: Number },
    date: { type: Date }
});

module.exports = mongoose.model('ogen_error_reporting', ogenErrorReporting)

