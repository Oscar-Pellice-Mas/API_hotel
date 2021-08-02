const express = require('express');
const usersRoutes = require('./src/routes/users');
const issuesRoutes = require('./src/routes/issues');
const materialsRoutes = require('./src/routes/materials');
const middleware = require('./src/middlewares/authentication');
require('dotenv').config();

const app = express();

// set views engine
app.set('port', process.env.PORT || 3000);

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));