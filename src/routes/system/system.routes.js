const { getAllComments } = require('./system.controller');

const router = require('express').Router()

// /system/comments
router.get('/comments', async (req, res) => {
    const result = await getAllComments({});
    res.send({ ...result });
});

module.exports = router;