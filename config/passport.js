const LocalStrategy = require("passport-local").Strategy;
// const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Find user
      User.findOne({ email })
        .select("+password")
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "That email is not registered.",
            });
          }
          //   Match Password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { message: "Incorrect Password." });
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
