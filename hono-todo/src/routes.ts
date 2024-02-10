import { Hono } from 'hono';
import {
	getTodosHandler,
	getTodoHandler,
	postTodoHandler,
	deleteTodoHandler,
	putTodoHandler
} from './handler/handlers';

const apiVersion = "v1";
const apiRootString = `/api/${apiVersion}`

const getApiUrl = (path: string) => `${apiRootString}/${path}`


export const SetupRoutes = (app: Hono) => {
	app.get("/", ...[getTodosHandler]);

	app.get(getApiUrl("todos"), ...[getTodosHandler]);

	app.get(getApiUrl("todos/:id"), ...[getTodoHandler]);

	app.post(getApiUrl("todos"), ...[postTodoHandler]);

	app.delete(getApiUrl("todos/:id"), ...[deleteTodoHandler]);

	app.put(getApiUrl("todos/:id"), ...[putTodoHandler]);

	return app;
}
