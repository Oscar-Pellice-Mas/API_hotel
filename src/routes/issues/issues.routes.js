const { getAllIssues, newIssue, updateIssue, deleteIssue, getIssue, logNewIssue, logUpdates, addMaterial } = require('./issues.controller');

const router = require('express').Router()

// /issues
router.get('/', async (req, res) => {//retorna totes les issues en el body esta el sorting
    const result = await getAllIssues({});
    res.send({ ...result });
});

// /issues
router.get('/:id', async (req, res) => {
    const result = await getIssue(req.params.id);
    res.send({ ...result });
});

// /issues/new
router.post('/new', async (req, res) => {//crea issue nova
    const result = await newIssue(req.body.issue);
    await logNewIssue(result.lead);
    res.send({ ...result });
});

// /issues/update/{id}
router.post('/update/:id', async (req, res) => {//actualitza issue en el body esta el status
    const result = await updateIssue(req.body.issue, req.params.id);
    res.send({ ...result});
});

// /issues/delete/{id}
router.get('/delete/:id', async (req, res) => {
    const result = await deleteIssue(req.params.id);
    res.send({...result});
});

// /issues/consume/{id}
router.post('/consume/:id', (req, res) => {//consumeix material d una issue
    res.json({ok: true})
});

// /issues/material/add/{id}
router.post('/material/add/:id', async (req, res) => {//afegeix material d una issue
    const result = await addMaterial(req.body.materialList, req.params.id);
    res.send({...result});
});

// /issues/updates
router.post('/updates', (req, res) => {//rep els camps que s han fet update de les issues
    const result = logUpdates(req.body.updates);
    res.send({...result});
});


module.exports = router;