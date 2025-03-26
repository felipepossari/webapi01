const userSchema = require('../models/userSchema');

module.exports = (req, res, next) => {
  const { error } = userSchema.validate(req.body, {abortEarly: false});
  if (error) {
    return res.status(400).json({error: error.details});
  }
  next();
}