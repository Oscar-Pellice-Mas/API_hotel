const { getAllIssues } = require('./issues.controller');

const router = require('express').Router()

// /issues
router.get('/', async (req, res) => {//retorna totes les issues en el body esta el sorting
    const result = await getAllIssues({});
    res.send({ ...result });
});

// /issues/new
router.get('/new', (req, res) => {//crea issue nova
    res.json({ok: true})
});

// /issues/update/{id}
router.post('/update/:id', (req, res) => {//actualitza issue en el body esta el status
    res.json({ok: true})
});

module.exports = router;