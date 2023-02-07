const { application } = require('express');
const express = require('express');
const router = express.Router();


const {ping, index} = require('../controllers/index.controllers')

/* GET home page. */
router.get('/', index);

router.get('/ping',ping );


module.exports = router;
