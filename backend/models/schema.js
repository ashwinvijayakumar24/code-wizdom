const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type:String},
    email: {type:String},
    message: {type:String},
    entryDate: {type:Date, default: Date.now}
})

const signUpSchema = new Schema({
    name: {type:String},
    email: {type:String},
    phone: {type: String},
    course: {type: String},
    message: {type:String},
    entryDate: {type:Date, default: Date.now}
})


const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const SignUpForm = mongoose.model('SignUps', signUpSchema, 'sign_up_form')

const mySchemas = {
    'Contact': Contact,
    'SignUps': SignUpForm
}


module.exports = mySchemas;