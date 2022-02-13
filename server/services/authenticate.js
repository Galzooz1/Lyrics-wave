const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const { UserSchema } = require('../models/user');
const config = require('../config/keys');

// local strategy
exports.local = passport.use(new LocalStrategy({ usernameField: 'email' }, passport.authenticate(UserSchema), ));
passport.serializeUser(passport.serializeUser(UserSchema));
passport.deserializeUser(passport.deserializeUser(UserSchema));
// JWT strategy
exports.generateToken = (user) => {
  return jwt.sign(user, config.SECRET_KEY, { expiresIn: 86400 });
};
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY
};
exports.jwtStrategy = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  if (err)
    return done(err, false);
  else if (user)
    return done(null, user);
  else
    return done(null, false);
}));
// verifying user
exports.verifyUser = passport.authenticate('jwt', { session: false });