const { getAllRevisions } = require('./revision.controller');

const router = require('express').Router()

// /revision
router.get('/', async (req, res) => {
    const result = await getAllRevisions({});
    res.send({...result});
});

module.exports = router;