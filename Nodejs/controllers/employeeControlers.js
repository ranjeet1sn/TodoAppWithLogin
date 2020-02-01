const express = require('express')
var router = express.Router()
var { TodoCollection } = require("../models/employee")
var ObjectId = require('mongoose').Types.ObjectId
router.get('/', (req, res) => {
  
    TodoCollection.find((err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            console.log("error in retriving list " + JSON.stringify(err, undefined, 2));
        }
    });
})
router.post('/', (req, res) => {

    var todo = new TodoCollection({
        title: req.body.title,
        description: req.body.description,
    });
    todo.save((err, docs) => {
        if (!err) {
            
            res.send(docs)
        }
        else {
            console.log("error in todo save" + JSON.stringify(err, undefined, 2))
        }
    })
})

router.put('/:id', (req, res) => {
    
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record woth this id : ${req.params.id}`)
    var emp = {
        title: req.body.title,
        description: req.body.description
    };
    TodoCollection.findByIdAndUpdate(req.params.id, { $set: emp }, (err, docs) => {
        if (!err) {
            res.send(docs)
            console.log(emp)
            
        }
        else {
            console.log("error in employee update" + JSON.stringify(err, undefined, 2))
        }
    })
})
router.delete('/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record woth this id : ${req.params.id}`)
    TodoCollection.findOneAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            console.log("error in employee Delete" + JSON.stringify(err, undefined, 2))
        }
    })
})
module.exports = router