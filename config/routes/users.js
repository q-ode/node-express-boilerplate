const router = require('express').Router();

const usersCtrl = require('../../controllers/usersCtrl');

router.route('/')
  .get(usersCtrl.index);

module.exports = router;
