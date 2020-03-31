var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', imgsrc: null });
});

router.post('/', (req, res) => {
  console.log('success');
});

module.exports = router;
