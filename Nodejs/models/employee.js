const mongoose = require('mongoose')
var TodoCollection=mongoose.model('todoCollection',{
    title:String,
    description:String
});
module.exports={TodoCollection}