const express = require('express');
const router = express.Router();
const path = require('path');

const range = (start, end) => {
	var len = end - start + 1;
	var a = new Array(len);
	for (let i = 0; i < len; i++) a[i] = start + i;
	return a;
}

const pythagore = (a, b, c ) => {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

//Return File extension
router.get('/:filename', (req, res) => {
    const file = req.params.filename;
    const extension = path.extname(file);
    res.send(`The file extension is ${extension}`);
})

// Triplet Pythagoricien
router.get('/', (req, res,) => {
    for (let i = 0; i < 11; i++) {
        for (let j = i + 1; j < 11; j++) {
            for (let k = j + 1; k < 11; k++) {
                if (pythagore(i,j,k)) console.log((i,j,k))
            }
        }
    }
})

module.exports = router;
