const router = require('express').Router()

// /materials
router.get('/', (req, res) => {//retorna tots els materials
    res.json({ok: true})
});

// /materials/new
router.get('/new', (req, res) => {//crea material nou
    res.json({ok: true})
});

// /materials/delete/{id}
router.get('/delete/{id}', (req, res) => {//elimina material
    res.json({ok: true})
});

// /materials/update/{id}
router.get('/update/{id}', (req, res) => {//update material
    res.json({ok: true})
});


module.exports = router;