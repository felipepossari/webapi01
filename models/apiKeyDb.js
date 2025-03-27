const {v4} = require('uuid');
const fs = require("fs");
const { FILE } = require('dns');
const FILE_PATH = require("path").join(__dirname, "apiKeyDb.json");

function findKeys() {
    if(!fs.existsSync(FILE_PATH)) { return []; }

    const rawData = fs.readFileSync(FILE_PATH);
    const keysJson = JSON.parse(rawData);
    return keysJson;
}

function addKey(key) {
    const keys = findKeys();
    key.id = v4();
    keys.push(key);
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys));
    return key;
}

function findKeyById(id) {
    return findKeys().find(key => key.id === id);
}

function updateKey(id, key) {
    const keys = findKeys();
    key.id = id;
    const index = keys.findIndex(key => key.id === id);
    keys[index] = key;
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys));
    return key;
}

function deleteKey(id) {
    const keys = findKeys();
    const index = keys.findIndex(key => key.id === id);
    keys.splice(index, 1);
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys));
}

module.exports = {
    findKeys,
    addKey,
    findKeyById,
    updateKey,
    deleteKey
}