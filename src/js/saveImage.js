const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const app = express();

// Configura o armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'src/images'));
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const imageName = crypto.createHash('md5').update(file.originalname + Date.now().toString()).digest('hex') + extension;
        cb(null, imageName);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imagePath = '/images/products/' + req.file.filename;
    res.send({ imagePath });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
