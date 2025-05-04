const express = require('express');
const multer = require('multer');
const router = require('express').Router();
const path = require('path');
const User = require('../models/User');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { firstName, lastName, email, age, phone, address, password } = req.body;
        const image = req.file.path;
        const newSignup = new User({
            firstName,
            lastName,
            email,
            age,
            phone,
            address,
            password,
            image,
        });

        await newSignup.save();


        console.log(req.body);
        res.status(201).json({ message: 'User saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})
module.exports = router;