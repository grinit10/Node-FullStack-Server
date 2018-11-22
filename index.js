const express = require('express');
const app = express();
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys : [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
const mongoose = require('mongoose');

require('./models/Users');
require('./services/passport');
require('./routes/authRoutes')(app);


mongoose.connect(
    keys.mongoHostUri,
    {
      auth: {
        user: keys.mongoUser,
        password: keys.mongoPassword
      },
      dbName:'NodeFullStackDb',
      useNewUrlParser: true
    },
    function(err, client) {
      if (err) {
        console.log(err);
      }
      else
        console.log('connected to atlas!!!');
    }
  );

const PORT = process.env.PORT || 5000;
app.listen(PORT);
