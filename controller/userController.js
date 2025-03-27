const db = require('../models/userDb');

function getUsers(req, res, next) {
    res.json(db.findUsers());
}

function createUsers(req, res, next) {
    const user = db.addUser(req.body);
    res.json(user);
}

function deleteUser(req, res, next) {
    db.deleteUser(req.params.id);
    res.status(204).send();
}

function getUserById(req, res, next) {
    const user = db.findUserById(req.params.id);
    if (!user) {
        return res.status(404).send();
    }
    res.json(user);
}

module.exports = {
    getUsers,
    createUsers,
    deleteUser,
    getUserById
}