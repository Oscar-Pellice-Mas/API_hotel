const express = require('express');
require('dotenv').config();
const usersRoutes = require('./src/routes/user/user.routes');
const issuesRoutes = require('./src/routes/issues');
const hotelsRoutes = require('./src/routes/hotel/hotel.routes');
const materialsRoutes = require('./src/routes/material/materials.routes');
const middleware = require('./src/middlewares/authentication');
const { db } = require('./src/services/db');

// db.authenticate()
//   .then(() => console.log("Connected to database"))
//   .catch((err) => console.log("Error: ", err));

const app = express();

// set views engine
app.set('port', process.env["PORT"] || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// express-messages middleware
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('/', middleware.authenticationMiddle, (req, res) => {
  res.json({ok: true})
});

app.use('/users', usersRoutes);
app.use('/issues', issuesRoutes);
app.use('/materials', materialsRoutes);
app.use('/hotels', hotelsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));