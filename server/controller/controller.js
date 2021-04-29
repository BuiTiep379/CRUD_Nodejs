var userdb = require('../model/model')

exports.create = (req, res, next) => {
    // validate request 
    if (req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return;
    }
    // new user
    const user = new userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in database
    user 
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            req.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            })
        })

}
exports.find = (req, res, next) => {

}
exports.update = (req, res, next) => {

}
exports.delete = (req, res, next) => {

}