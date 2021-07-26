const router = require('express').Router()

// /users
router.get('/', (req, res) => {
    res.json({ok: true})
});

// /users/new
router.get('/new', (req, res) => {
    res.json({ok: true})
});

module.exports = router;