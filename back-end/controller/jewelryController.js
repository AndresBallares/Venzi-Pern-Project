const express = require('express');
const jewelry = express.Router();


jewelry.get('/', async (req, res) => {
    const test = await getAllTest();
    res.status(200).json(test)
});





module.exports = jewelry;