const { getAllMaterials, addNewMaterial, updateMaterial, deleteMaterial, getMaterial, getMaterialAverage, extractAverage } = require('./materials.controller');

const router = require('express').Router()

// /materials
router.get('/', async (req, res) => {//retorna tots els materials
    const materials = await getAllMaterials({});
    for(var i = 0; i < materials.lead.length; i++){
        materials.lead[i].average = extractAverage(await getMaterialAverage(materials.lead[i].id, materials.lead[i].id_hotel));      
    }
    res.send({ ...materials });
});

// /materials/:id
router.get('/:id', async (req, res) => {
    const materials = await getMaterial(req.params.id);
    res.send({ ...materials });
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
    const averages = await getMaterialAverage(req.params.id, "623fbf6c-067f-11ec-a416-020000fcbc46");
    averages["average"] = extractAverage(averages);
    res.send({ ...averages})
});

module.exports = router;