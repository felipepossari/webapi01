const express = require('express');
const router = express.Router();
const db = require('../models/db');
const userSchema = require('../models/userSchema');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(db.findUsers());
});

router.get('/:id', (req, res, next) => {
  const user = db.findUserById(req.params.id);
  if (!user) {
    return res.status(404).send();
  }
  res.json(user);
});

router.post('/', (req, res, next) => {
  const { error } = userSchema.validate(req.body, {abortEarly: false});
  if (error) {
    return res.status(400).json({error: error.details});
  }
  const user = db.addUser(req.body);
  res.json(user);
});

router.put('/:id', (req, res, next) => {
  const user = db.updateUser(req.params.id, req.body);
  res.json(user);
});

router.delete('/:id', (req, res, next) => {
  db.deleteUser(req.params.id);
  res.status(204).send();
}); 

module.exports = router;
