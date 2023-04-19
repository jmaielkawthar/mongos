let mongoose = require('mongoose');
let EmailModel = require('./email')
let UserModel = require('./user')
// let timestampPlugin = require('./timestamp')

// let msg = new EmailModel({
// email: 'theoutlander@live.com'
// })




let user = new UserModel({
  firstName: 'jamel',
  lastName: 'abid'
  })
user.save()
.then(doc => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
})
//Query Building
// let userModel = new UserModel()
// userModel.find()                   // find all users
//          .skip(10)                // skip the first 100 items
//          .limit(10)                // limit to 10 items
//          .sort({firstName: 1}      // sort ascending by firstName
//          .select({firstName: true} // select firstName only
//          .exec()                   // execute the query
//          .then(docs => {
//             console.log(docs)
//           })
//          .catch(err => {
//             console.error(err)
//           })

// let model = new UserModel()
// model.fullName = 'Thomas Anderson'
// console.log(model.toJSON())  // Output model fields as JSON
// console.log()
// console.log(model.fullName)  // Output the full name


// let model = new UserModel({
//   firstName: 'Thomas',
//   lastName: 'Anderson'
// })
// let initials = model.getInitials()
// console.log(initials) // This will output: TA



// UserModel.getUsers().then(docs => {
//     console.log(docs)
//   })
//   .catch(err => {
//     console.error(err)
//   })



//Create Record
// msg.save()
//    .then(doc => {
//      console.log(doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })

//fetch record
// EmailModel.find({
//     email: 'theoutlander@live.com'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
  //Update Record
  // EmailModel.findOneAndUpdate(
  //   {
  //     email: 'theoutlander@live.com'  // search query
  //   }, 
  //   {
  //     email: 'kawthar@live.com'   // field:values to update
  //   },
  //   {
  //     new: true,                       // return updated doc
  //     runValidators: true              // validate before update
  //   })
  // .then(doc => {
  //   console.log(doc)
  // })
  // .catch(err => {
  //   console.error(err)
  // })
//Delete Record
  // EmailModel
  // .findOneAndRemove({
  //   email: 'theoutlander@gmail.com'
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(err => {
  //   console.error(err)
  // })

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'contact';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
  

_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}



module.exports = new Database()