var express = require('express');
var router = express.Router();

const find = (req, res, next) => {
   res.send('Users List');
}

router['get']('/',find)

router.post('/')

//router[method](path, action)

module.exports = router;