"use strict";

const boom = require( "@hapi/boom" );

const login = {
	method: "GET",
	path: "/login",
	options: {
		handler: request => {
			if ( !request.auth.isAuthenticated ) {
				return `Authentication failed due to: ${ request.auth.error.message }`;
			}
		}
	}
};

const oAuthCallback = {
	method: "GET",
	path: "/authorization-code/callback",
	handler: ( request, h ) => {
		if ( !request.auth.isAuthenticated ) {
			throw boom.unauthorized( `Authentication failed: ${ request.auth.error.message }` );
		}
		request.cookieAuth.set( request.auth.credentials );
		return h.redirect( "/" );
	},
	options: {
		auth: "okta"
	}
};

const logout = {
	method: "GET",
	path: "/logout",
	handler: ( request, h ) => {
		try {
			if ( request.auth.isAuthenticated ) {
				// clear the local session
				request.cookieAuth.clear();
			}

			return h.redirect( "/" );
		} catch ( err ) {
			request.log( [ "error", "logout" ], err );
		}
	},
	options: {
		auth: {
			mode: "try"
		}
	}
};

module.exports = [ 
	login,
	oAuthCallback,
	logout
];
