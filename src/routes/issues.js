const router = require('express').Router()

// /issues
router.get('/', (req, res) => {//retorna totes les issues en el body esta el sorting
    res.json({ok: true})
});

// /issues/new
router.get('/new', (req, res) => {//crea issue nova
    res.json({ok: true})
});

// /issues/update/{id}
router.get('/update/{id}', (req, res) => {//actualitza issue en el body esta el status
    res.json({ok: true})
});

module.exports = router;