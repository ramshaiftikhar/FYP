const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

// https://github.com/jaredhanson/passport-local#usage

// With the new keyword we tell Passport to use an instance of the LocalStrategy we required.
const strategy = new LocalStrategy(
	{
		emailField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		User.findOne({ email: email }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy;

/* 1> This strategy takes an optional options hash before the function, e.g. new LocalStrategy({options , callback})

The available options are:

emailField - Optional, defaults to 'email'
passwordField - Optional, defaults to 'password'

Both fields define the name of the properties in the POST body that are sent to the server.

Significance of the above is, By default, LocalStrategy expects to find credentials in parameters named email and password. If your site prefers to name these fields differently, options are available to change the defaults.

https://github.com/jaredhanson/passport-local#available-options

3> more details on implementing local strategy - https://www.sitepoint.com/local-authentication-using-passport-node-js/
*/
