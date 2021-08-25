const { getAllMaterials, addNewMaterial, updateMaterial, deleteMaterial, getMaterial, getMaterialAverage, extractAverage } = require('./materials.controller');

const router = require('express').Router()

// /materials
router.get('/', async (req, res) => {//retorna tots els materials
    const result = await getAllMaterials({});
    res.send({ ...result });
});

// /materials/:id
router.get('/:id', async (req, res) => {
    const result = await getMaterial(req.params.id);
    res.send({ ...result });
});

// /materials/new
router.post('/new', async (req, res) => {//crea material nou
    const result = await addNewMaterial(req.body.material);
    res.send({ ...result})
});

// /materials/delete/{id}
router.get('/delete/:id', async (req, res) => {//elimina material
    const result = await deleteMaterial(req.params.id);
    res.send({ ...result})
});

// /materials/update/{id}
router.post('/update/:id', async (req, res) => {//update material
    const result = await updateMaterial(req.body.material, req.params.id);
    res.send({ ...result})
});


router.get('/average/:id', async (req, res) => {
    const averages = await getMaterialAverage(req.params.id, "0f1c446d-f92e-11eb-a416-020000fcbc46");
    averages["average"] = extractAverage(averages);
    res.send({ ...averages})
});

module.exports = router;