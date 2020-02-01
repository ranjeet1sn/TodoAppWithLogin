var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/todo", (err) => {
    if (!err) {
        console.log("connection sucessfull..")
    }
    else {
        console.log("error in connection " + JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongoose;