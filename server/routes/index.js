const router = require('express').Router();
const sortString = require('../actions/sortString');

router.get('/', (req, res) => {
  res.status(200);
});

router.post('/sortString', sortString.post);

module.exports = router;