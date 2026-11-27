const express = require('express');
const upload = require('../config/upload');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/upload', verifyToken, upload.single('avatar'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const url = `/uploads/${req.file.filename}`;

    res.status(201).json({ url });
});

module.exports = router;