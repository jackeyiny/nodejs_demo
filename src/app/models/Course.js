const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name:{type: 'string', maxLength:255},
    decription: {type: 'string', maxLength:600},

});

module.exports =mongoose.model('Course',Course);