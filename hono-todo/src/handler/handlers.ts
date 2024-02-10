import { Hono, Context, Next } from "hono";

export const getTodosHandler = (c: Context, next: Next) => {
	console.log("getTodosHandler");
	console.log(c.req.header("authorization"));

	// call usecase
	console.log("call usecase for getTodos")

	// return response
	return c.json({
		status: "200",
		message: "List of todos"
	});
};

export const getTodoHandler = (c: Context, next: Next) => {
	console.log("getTodoHandler");
	console.log(c.req.header("authorization"));
	const id = c.req.param("id");
	console.log("id: ", id);

	// call usecase
	console.log("call usecase for getTodo")

	// return response
	return c.json({
		status: "200",
		message: `Get a todo with id: ${id}`
	});
};

export const postTodoHandler = (c: Context, next: Next) => {
	console.log("postTodoHandler");
	console.log(c.req.header);

	// call usecase
	console.log("call usecase for postTodo")

	// return response
	return c.json({
		status: "200",
		message: "Create a todo"
	});
};

export const deleteTodoHandler = (c: Context, next: Next) => {
	console.log("deleteTodoHandler");
	console.log(c.req.header("authorization"));
	const id = c.req.param("id");
	console.log("id: ", id);

	// call usecase
	console.log("call usecase for deleteTodo")

	// return response
	return c.json({
		status: "200",
		message: `Delete a todo with id: ${id}`
	});
};

export const putTodoHandler = (c: Context, next: Next) => {
	console.log("putTodoHandler");
	console.log(c.req.header("authorization"));
	const id = c.req.param("id");
	console.log("id: ", id);

	// call usecase
	console.log("call usecase for putTodo")

	// return response
	return c.json({
		status: "200",
		message: `Update a todo with id: ${id}`
	});
};
