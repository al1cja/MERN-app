const User = require('../model/model');

exports.createUser = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
    })

    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(400).send({
                message: error.message
            });
        })
}

exports.findUsers = (req, res) => {
    User.find()
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(400).send({
                message: error.message
            });
        })
}

exports.updateUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(400).send({
                message: error.message
            });
        })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(() => {
            res.send({ message: "User deleted" })
        })
        .catch(error => {
            res.status(400).send({
                message: error.message
            });
        })
}

exports.findUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => {
        res.send(user)
    })
    .catch(error => {
        res.status(400).send({
            message: error.message
        });
    })
}
