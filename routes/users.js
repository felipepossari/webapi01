const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/userValidationMiddleware');
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', validateUser, userController.createUsers);

router.put('/:id', validateUser, (req, res, next) => {
  const user = db.updateUser(req.params.id, req.body);
  res.json(user);
});

router.delete('/:id', userController.deleteUser); 

module.exports = router;
