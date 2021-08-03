const { getAllHotels } = require('./hotel.controller');

const router = require('express').Router()

// /users
router.get('/', async (req, res) => {//retorna tots els users
    const result = await getAllHotels({});
    res.send({ ...result });
});

// /users/new
router.post('/new', (req, res) => {//crea usuari nou
    res.json({ok: true})
});

// /users/update/{id}
router.post('/update/:id', (req, res) => {//modifica usuari
    res.json({ok: true})
});

// /users/delete/{id}
router.get('/delete/:id', (req, res) => {//elimina usuari
    res.json({ok: true})
});

module.exports = router;