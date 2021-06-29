const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ 
    dest: path.join(__dirname, '../public/uploads/')
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, './public/uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     }
//   });
  
// const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.render('html');
});

router.post('/', upload.single('myFile'), (req, res) => {
     
    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");

    const filename = path.join(__dirname, '../public/uploads/', req.file.filename);
    const myId = path.join(__dirname, '../public/uploads/', req.body.myId);

    const newName = fs.rename(filename, myId, () => {
        console.log('Файл переименован!');
    });

});

module.exports = router;