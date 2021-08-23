const { getAllUpgrades, getUpgrade, newUpgrade, deleteUpgrade, updateUpgrade } = require('./upgrade.controller');

const router = require('express').Router()

// /upgrade
router.get('/', async (req, res) => {//retorna tots els upgrades
    const result = await getAllUpgrades({});
    res.send({ ...result });
});

// /upgrade/:id
router.get('/:id', async (req, res) => {
    const result = await getUpgrade(req.params.id);
    res.send({ ...result });
});

// /upgrade/new
router.post('/new', async (req, res) => {//crea upgrade nou
    const result = await newUpgrade(req.body.upgrade);
    res.send({ ...result})
});

// /upgrade/delete/{id}
router.get('/delete/:id', async (req, res) => {//elimina upgrade
    const result = await deleteUpgrade(req.params.id);
    res.send({ ...result})
});

// /upgrade/update/{id}
router.post('/update/:id', async (req, res) => {//update upgrade
    const result = await updateUpgrade(req.body.upgrade, req.params.id);
    res.send({ ...result})
});

module.exports = router;