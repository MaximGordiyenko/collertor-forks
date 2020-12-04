const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const ProfileController = require('./controllers/profile');
const LogoutController = require('./controllers/logout');
const SignupController = require('./controllers/signup');
const LoginController = require('./controllers/login');
const ForkController = require('./controllers/forks');
const User = require('./models/users');
const Fork = require('./models/fork');

const paginate = require("jw-paginate");

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

const MongoStore = connectMongo(session);
const database = require('./database');
database.db();

const envConfig = dotenv.config();
if (envConfig.error) {
  console.log('.env file does not loaded');
  throw envConfig.error;
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
  }),
}));

const loggerMiddleWare = async (req, res, next) => {
  try {
    let user = await User.findById(req.session.userId);
    console.log('current user id:', user._id || 'unauthorized');
  } catch (err) {
    console.log('current user id:', 'unauthorized');
  }
  next();
};

app.get('/show-forks', async (req, res) => {
  try {
    const forks = await Fork.find({});
    return res.json({ forks });
  }
  catch (error) {
    return res.status(500).send(error);
  }
});

app.use(express.static('src/views/public'));
app.use('/forks', loggerMiddleWare, express.static('src/view/forks'));

app.post('/login', loggerMiddleWare, LoginController);
app.post('/signup', loggerMiddleWare, SignupController);
app.get('/logout', loggerMiddleWare, LogoutController);
app.get('/profile', loggerMiddleWare, ProfileController);
app.use('/fork', loggerMiddleWare, ForkController);

app.listen(process.env.NODE_PORT, () => console.log(`fork server running on port: ${process.env.NODE_PORT}`));
