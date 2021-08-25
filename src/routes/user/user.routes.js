const { updateMaterial } = require('../material/materials.controller');
const { getAllUsers, getUser, addNewUser, updateUser, deleteUser } = require('./user.controller');

const router = require('express').Router()

// /users
router.get('/', async (req, res) => {//retorna tots els users
    const result = await getAllUsers({});
    res.send({ ...result });
});

// /users/:id
router.get('/:id', async(req, res) => {
    const result = await getUser(req.params.id);
    res.send({ ...result});
});

// /users/new
router.post('/new', async (req, res) => {//crea usuari nou
    const result = await addNewUser(req.body.user);
    res.send({ ...result});
});

// /users/update/{id}
router.post('/update/:id', async (req, res) => {//modifica usuari
    const result = await updateUser(req.body.user, req.params.id);
    res.send({ ...result});
});

// /users/delete/{id}
router.get('/delete/:id', async (req, res) => {//elimina usuari
    const result = await deleteUser(req.params.id);
    res.send({ ...result});
});

module.exports = router;