const { getAllMaterials, addNewMaterial, updateMaterial } = require('./materials.controller');

const router = require('express').Router()

// /materials
router.get('/', async (req, res) => {//retorna tots els materials
    const result = await getAllMaterials({});
    res.send({ ...result });
});

// /materials/new
router.post('/new', async (req, res) => {//crea material nou
    const result = await addNewMaterial(req.body.material);
    res.send({ ...result})
});

// /materials/delete/{id}
router.get('/delete/:id', (req, res) => {//elimina material
    res.json({ok: true})
});

// /materials/update/{id}
router.post('/update/:id', async (req, res) => {//update material
    const result = await updateMaterial(req.body.material, req.params.id);
    res.send({ ...result})
});


module.exports = router;