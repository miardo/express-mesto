/* eslint-disable eol-last */
const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');

const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const handleErrors = require('./middlewares/handleErrors');

const E404 = require('./middlewares/E404');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.post('/signin', login);
app.post('/signup', createUser);

app.use('/', auth, require('./routes/users'));
app.use('/', auth, require('./routes/cards'));

app.use('*', (req, res, next) => {
  next(new E404('Страница не найдена'));
});

app.use(errors());
app.use(handleErrors);

app.listen(PORT);