const router = require('express').Router();
const controller = require('./controllers');

router.post('/repos', controller.create);

router.get('/repos', controller.get);

module.exports = router;