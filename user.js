let mongoose = require('mongoose')
// let timestampPlugin = require('./timestamp')
// userSchema.plugin(timestampPlugin)


let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date
})

// Helpers  Middleware : add a pre-save hook and set values for createdAt and updatedAt:
userSchema.pre('save', function (next) {
    let now = Date.now()
     
    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
    // Call the next function in the pre-save chain
    next()    
  })
//Virtual Property
userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
  })
  userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.firstName = str[0]
    this.lastName = str[1]
  })
//Instance Methods
  userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0]
  }
  //Static Methods : a method to retrieve all users in the database
  userSchema.statics.getUsers = function() {
    return new Promise((resolve, reject) => {
      this.find((err, docs) => {
        if(err) {
          console.error(err)
          return reject(err)
        }
        resolve(docs)
      })
    })
  }
module.exports = mongoose.model('User', userSchema)