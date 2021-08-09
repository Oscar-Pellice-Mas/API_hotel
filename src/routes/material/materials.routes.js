const { getAllMaterials } = require('./materials.controller');

const router = require('express').Router()

// /materials
router.get('/', async (req, res) => {//retorna tots els materials
    const result = await getAllMaterials({});
    res.send({ ...result });
});

// /materials/new
router.post('/new', (req, res) => {//crea material nou
    res.json({ok: true})
});

// /materials/delete/{id}
router.get('/delete/:id', (req, res) => {//elimina material
    res.json({ok: true})
});

// /materials/update/{id}
router.post('/update/:id', (req, res) => {//update material
    res.json({ok: true})
});


module.exports = router;