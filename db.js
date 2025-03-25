const {v4} = require('uuid');

global.users = [];

function findUsers(){
    return global.users;
}

function addUser(user){
    user.id = v4();
    global.users.push(user);
    return user;
}

function findUserById(id){
    return global.users.find(user => user.id === id);
}

function updateUser(id, user){
    user.id = id;
    const index = global.users.findIndex(user => user.id === id);
    global.users[index] = user;
    return user;
}

function deleteUser(id){
    const index = global.users.findIndex(user => user.id === id);
    global.users.splice(index, 1);
}

module.exports = {
    findUsers,
    addUser,
    findUserById,
    updateUser,
    deleteUser
}