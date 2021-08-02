const router = require('express').Router()

// /users
router.get('/', (req, res) => {//retorna tots els users
    res.json({ok: true})
});

// /users/new
router.post('/new', (req, res) => {//crea usuari nou
    res.json({ok: true})
});

// /users/delete/{id}
router.get('/delete/{id}', (req, res) => {//elimina usuari
    res.json({ok: true})
});

module.exports = router;