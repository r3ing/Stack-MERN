const {
    Router
} = require('express');
const router = Router();
const userCtrl = require('../controllers/users.controller');

router.route('/')
    .get(userCtrl.getUsers)
    .post(userCtrl.createUser);

router.route('/:id')
    .get(userCtrl.getUser)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);

module.exports = router;