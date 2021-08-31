const { getAllHotels, getHotel, addNewHotel, updateHotel, deleteHotel } = require('./hotel.controller');

const router = require('express').Router()

// /hotels
router.get('/', async (req, res) => {//retorna tots els users
    const result = await getAllHotels({});
    res.send({ ...result });
});

// /hotels/id
router.get('/:id', async (req, res) => {//crea hotel nou
    const result = await getHotel(req.params.id);
    res.send({ ...result });
});

// /hotels/new
router.post('/new', async (req, res) => {//crea hotel nou
    const result = await addNewHotel(req.body.hotel);
    res.send({ ...result });
});

// /hotels/update/{id}
router.post('/update/:id', async (req, res) => {//modifica hotel
    const result = await updateHotel(req.body.hotel, req.params.id);
    res.send({ ...result });
});

// /hotels/delete/{id}
router.get('/delete/:id', async (req, res) => {//elimina hotel
    const result = await deleteHotel(req.body.hotel, req.params.id);
    res.send({ ...result });
});

module.exports = router;