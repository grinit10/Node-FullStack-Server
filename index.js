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
app.use(express.json());
const mongoose = require('mongoose');

require('./models/Users');
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


mongoose.connect(
    keys.mongoHostUri,
    {
      auth: {
        user: keys.mongoUser,
        password: keys.mongoPassword
      },
      dbName:keys.dbName,
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

  if(process.env.NODE_ENV === 'production') {
    console.log('react in prod mode');
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
      console.log('in misc path');
      res.sendFile(path.resolve(__dirname, 'clint', 'build', 'index.html'))
    });
  }
const PORT = process.env.PORT || 5000;
app.listen(PORT);
