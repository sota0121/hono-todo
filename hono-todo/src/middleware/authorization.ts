import { Hono, Context, Next } from 'hono';
import { basicAuth } from 'hono/basic-auth';

export async function authzMiddleware(c: Context, next: Next) {
	console.log("Start authzMiddleware");
	console.log("c.env.BASIC_AUTH_USERNAME: ", c.env.BASIC_AUTH_USERNAME);
	console.log("c.env.BASIC_AUTH_PASSWORD: ", c.env.BASIC_AUTH_PASSWORD);

	const auth = basicAuth({
		username: c.env.BASIC_AUTH_USERNAME,
		password: c.env.BASIC_AUTH_PASSWORD
	});
	return auth(c, next);
};


/**
 * ## Old and Wrong Implementation
 * authzMiddlewareHandler is a middleware that checks for the presence of the Basic Authorization header
 * @param c
 * @param next
 * @returns
 * @description This middleware expects the Basic Authorization header below:
 * e.g. "Basic $Username:$Password"
 */
// export const authzMiddlewareHandler = (c: Context, next: Next) => {
// 	console.log("Start authzMiddlewareHandler");
// 	const authHeader = c.req.header("authorization");
// 	if (!authHeader) {
// 		return c.json({
// 			status: "401",
// 			message: "Unauthorized"
// 		});
// 	}
// 	console.log("authHeader: ", authHeader);

// 	const [authType, authValue] = authHeader.split(" ");
// 	if (authType !== "Basic") {
// 		console.log("Invalid auth type. Expected Basic");
// 		return c.json({
// 			status: "401",
// 			message: "Unauthorized"
// 		});
// 	}
// 	console.log("authValue: ", authValue);

// 	const [username, password] = authValue.split(":");

// 	const validUsername = username === c.env.BASIC_AUTH_USERNAME;
// 	const validPassword = password === c.env.BASIC_AUTH_PASSWORD;

// 	if (!validUsername || !validPassword) {
// 		// debug
// 		console.log("validUsername: ", validUsername);
// 		console.log("env.BASIC_AUTH_USERNAME: ", c.env.BASIC_AUTH_USERNAME);
// 		console.log("req.username: ", username);
// 		console.log("validPassword: ", validPassword);
// 		console.log("env.BASIC_AUTH_PASSWORD: ", c.env.BASIC_AUTH_PASSWORD);
// 		console.log("req.password: ", password);
// 		// debug

// 		return c.json({
// 			status: "401",
// 			message: "Unauthorized"
// 		});
// 	}

// 	console.log("End authzMiddlewareHandler with success");

// 	return next();
// };
