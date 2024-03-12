const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const jwtSec="sdvfrhgdgbfdfgpidbdhsdgmsfbindfn"

router.post("/createuser", [
   // validator start format
   body('email', 'wrong email format').isEmail(),
   body('name').isLength({ min: 5 }),
   body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
   // validator starts
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

const salt=await bcrypt.genSalt(10);
let secPassword=await bcrypt.hash(req.body.password, salt);

   //   after valadating now it will create the account of user 
   try {
      await User.create({
         name: req.body.name,
         password: secPassword,
         email: req.body.email,
         location: req.body.location
      })
      res.json({ success: true });
   }
   catch (error) {
      console.log(error);
      res.json({ success: false });
   }
})


router.post("/loginuser", [
   // validator start format
   body('email', 'wrong email format').isEmail(),
   body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
   // validator starts
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   //   after valadating now it will create the account of user 
   const{email, password} = req.body;
   try {
      let userEmail = await User.findOne({ email });
      if (!userEmail) {
         return res.status(400).json({ errors: "Wrong email " });
      }
      const pwdCompare=await bcrypt.compare(req.body.password, userEmail.password)
      if (!pwdCompare) {
         return res.status(400).json({ errors: "Wrong password " });

      }
      const data={
         user:{
            id:userEmail.id
         }
      }
      const authToken=jwt.sign(data, jwtSec);
      return res.json({ success: true, authToken:authToken })
   }
   catch (error) {
      console.log(error);
      res.json({ done: false });
   }
})
module.exports = router;