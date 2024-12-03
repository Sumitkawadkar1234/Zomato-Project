const express = require('express');
const router = express.Router();
let User = require('../models/user');
const bcrypt = require('bcrypt');
router.post('/login', async(req, res) => {
    let loginData = await User.findOne({ email: req.body.email });
    if (loginData) {
        let validPass = await bcrypt.compare(req.body.passWord, loginData.passWord);
        if (validPass) {
            res.send("Logged In");
        } else {
            res.send("Failed");
        }
    } else {
        return res.send("User not found Please Create  new Account");
    }
});
module.exports = router;