const { v4 } = require('uuid');
const fs = require("fs");
const FILE_PATH = require("path").join(__dirname, "db.json");

global.users = [];

function findUsers() {
    try {
        return require("./db.json");
    } catch (e) {
        return [];
    }
}

function addUser(user) {
    const users = findUsers();
    user.id = v4();
    users.push(user);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return user;
}

function findUserById(id) {
    return findUsers().find(user => user.id === id);
}

function updateUser(id, user) {
    const users = findUsers();
    user.id = id;
    const index = users.findIndex(user => user.id === id);
    users[index] = user;
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return user;
}

function deleteUser(id) {
    const users = findUsers();
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
}

module.exports = {
    findUsers,
    addUser,
    findUserById,
    updateUser,
    deleteUser
}