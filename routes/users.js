const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(db.findUsers());
});

router.post('/', (req, res, next) => {
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
