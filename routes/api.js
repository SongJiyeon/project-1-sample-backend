const express = require('express');
const multer  = require('multer');

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log('path is problem');
    callback(null, '/images')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
});

const upload = multer({ storage: Storage });

const router = express.Router();

router.get('/upload', (req, res) => {
  res.status(200).send('You can post to /api/upload.');
});

router.post('/upload', upload.single('photo'), (req, res) => {
  try {
    console.log('file', req.file);
    console.log('body', req.body);
    res.status(200).json({ title: '123' });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 123 });
  }
});

module.exports = router;
