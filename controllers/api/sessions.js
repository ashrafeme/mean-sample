var router = require('express').Router();
var User   = require("../../models/user");
var bcrypt = require("bcrypt");
var jwt    = require("jwt-simple");
var config = require("../../config");

router.post('/',function (req,res,next) {
    //console.log("username:",req.body.username);
    User.findOne({username:req.body.username})
    .select('password').select('username')
    .exec(function(err,user){
        if(err) {return next(err)}
        //console.log(user);
        if(!user){return res.sendStatus(401)}
        bcrypt.compare(req.body.password,user.password,function(err,valid){
            if(err) {return next(err)}
             //console.log(user);
            if(!valid){return res.sendStatus(401)}
            var token = jwt.encode({username:user.username},config.secret)
            return res.send(token);
        })
    })
})

module.exports = router;
