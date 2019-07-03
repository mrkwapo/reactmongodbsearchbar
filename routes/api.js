const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor');


router.get("/", (req, res) => res.send("api route is working!"))

router.post('/', function(req,res) {
    const userName= req.body.username;
    const lastName= req.body.lastname;
    const firstName= req.body.firstname;
    const mentorEmail= req.body.mentoremail;
    const programLanguage= req.body.programlanguage;
    const speakingLanguage= req.body.speakinglanguage;
    const mentorCity= req.body.mentorcity;
    const mentorState= req.body.mentorstate;
    const mentorCountry= req.body.mentorcountry;
    const mentorStatus= req.body.mentorstatus;
    const mentorBio = req.body.mentorbio;
    const password = req.body.password;

    
    const data = {
        username: userName,
        firstname: firstName,
        lastname: lastName, 
        mentoremail: mentorEmail,
        programlanguage: programLanguage,
        speakinglanguage: speakingLanguage,
        mentorcity: mentorCity,
        mentorstate: mentorState,
        mentorcountry: mentorCountry,
        mentorstatus: mentorStatus,
        mentorbio: mentorBio,
        password: password
    }
        
    console.log(data)

        const mentor = new Mentor(data)
        mentor.save()
        .then(() => res.send(data))
        .catch(err=> console.log(err))
    

})

router.get("/getallmentors", function(req, res) {
    Mentor
    .find()
    .then(results => {
      console.log(results)
      res.send(results)
    })
 
})

router.get("/showprofile/:username", function (req, res) {
    const mentor = req.params.username;
    console.log(mentor);
   

    Mentor.find({ username: mentor })
    .then(result => {
      console.log("Showing", mentor, "profile:", result)
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })

})

module.exports = router;
