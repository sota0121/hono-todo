import { Hono } from 'hono';
import { Bindings } from './bindings';
import {
	getTodosHandler,
	getTodoHandler,
	postTodoHandler,
	deleteTodoHandler,
	putTodoHandler
} from './handler/handlers';
import { authzMiddleware } from './middleware/authorization';

const apiVersion = "v1";
const apiRootString = `/api/${apiVersion}`

const getApiUrl = (path: string) => `${apiRootString}/${path}`


export const SetupRoutes = (app: Hono<{Bindings: Bindings}>) => {
	// ==========================
	// Middlewares
	// ==========================
	app.use(getApiUrl("*"), ...[authzMiddleware]);

	// ==========================
	// Handlers
	// ==========================
	app.get("/", ...[getTodosHandler]);

	app.get(getApiUrl("todos"), ...[getTodosHandler]);

	app.get(getApiUrl("todos/:id"), ...[getTodoHandler]);

	app.post(getApiUrl("todos"), ...[postTodoHandler]);

	app.delete(getApiUrl("todos/:id"), ...[deleteTodoHandler]);

	app.put(getApiUrl("todos/:id"), ...[putTodoHandler]);

	return app;
}
