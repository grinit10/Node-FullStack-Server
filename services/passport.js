const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const Users = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    Users
        .findById(id)
        .then(user => done(null, user))
        .catch(err => console.log(err))
})

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);
    // console.log(done);
    const user = await Users.findOne({ googleId: profile.id });
    if (user) {
        console.log('A record for the same user exists with google id :' + user.googleId);
        return done(null, user);
    }
    user = await new Users({ googleId: profile.id }).save();
    done(null, user);

}));