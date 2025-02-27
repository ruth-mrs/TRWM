var express = require('express');
var router = express.Router();
const ctrlUser = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrlUser.index);

module.exports = router;
