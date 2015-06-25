var path = require('path');
var express = require("express");
var router = express.Router();
router.use(express.static(__dirname+'/../assets'))
router.use(express.static(__dirname+'/../templates'))
router.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname, '../layout', 'app.html'));
});

module.exports = router;