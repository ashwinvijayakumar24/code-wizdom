const express = require('express');
const router = express.Router();
const schemas = require('../models/schema');


router.post('/contact', async (req, res) => {
    const {name, email, message} = req.body;

    const newContact = new schemas.Contact({name:name, email:email, message:message});
    const saveContact = await newContact.save();
    if(saveContact) {
        res.send(req.body);
    }
})

router.post('/signup', async (req, res) => {
    const {name, email, phone, course, message} = req.body;

    const newSignUp = new schemas.SignUps({name:name, email:email, phone: phone, course: course, message:message});
    const saveSignUp = await newSignUp.save();
    if(saveSignUp) {
        res.send(req.body);
    }
})



module.exports = router;