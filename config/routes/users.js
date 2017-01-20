const router = require('express').Router();
const Auth = require('../../middlewares/auth');
const usersCtrl = require('../../controllers/usersCtrl');

router.route('/')
  .get(Auth.verify, usersCtrl.index);

module.exports = router;
