const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mentorSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,    
    mentoremail: String,
    programlanguage: String,
    speakinglanguage: String,
    mentorcity: String,
    mentorstate: String,
    mentorcountry: String,
    mentorstatus: String,
    mentorbio: String,
    password: String
})

module.exports = mongoose.model('Mentor', mentorSchema);