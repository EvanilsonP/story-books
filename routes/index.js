const express = require('express');
const router = express.Router();

// @desc     Login / landing page
router.get('/', (req, res) => {
    res.render('Login');
});
// @desc     Login / dashboard
router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

module.exports = router;