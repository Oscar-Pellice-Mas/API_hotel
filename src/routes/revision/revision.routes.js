const { getAllRevisions, addNewRevision, updateRevision, deleteRevision } = require('./revision.controller');

const router = require('express').Router()

// /revision
router.get('/', async (req, res) => {
    const result = await getAllRevisions({});
    res.send({...result});
});

// /revision/new
router.post('/new', async (req, res) => {
    const result = await addNewRevision(req.body.revision);
    res.send({...result});
});

// /revision/delete/{id}
router.get('/delete/:id', async (req, res) => {
    const result = await deleteRevision(req.params.id);
    res.send({ ...result})
});

// /revision/update/{id}
router.post('/update/:id', async (req, res) => {
    const result = await updateRevision(req.body.revision, req.params.id);
    res.send({ ...result})
});

module.exports = router;