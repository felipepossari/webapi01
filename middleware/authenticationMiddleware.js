const apiKeyDb = require('../models/apiKeyDb');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {    
        return res.status(401).json({error: 'Missing ApiKey'});
    }

    const key = token.replace('ApiKey ', '');

    const apiKey = apiKeyDb.findKeyById(key);

    if (!apiKey) {
        return res.status(401).json({error: 'Invalid ApiKey'});
    }
    next();
}