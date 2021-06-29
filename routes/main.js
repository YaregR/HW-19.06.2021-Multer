const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({ 
    dest: path.join(__dirname, '../public/uploads/')
});

router.get('/', (req, res) => {
    res.render('html');
});

router.post('/', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    res.json({ status: 'ok' });
});

module.exports = router;