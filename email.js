let mongoose = require('mongoose')
let validator = require('validator')
// let timestampPlugin = require('./timestamp')
// emailSchema.plugin(timestampPlugin)
//Defining the Schema
let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  }
})
//Exporting a Model
module.exports = mongoose.model('Email', emailSchema)