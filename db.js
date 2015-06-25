var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/social',function(){
   console.log("mongodb Connected") ;
});

module.exports = mongoose;