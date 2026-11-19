"use server";

import connectMongo from "@/db/mongoose";
import ToDo, { Todo } from "@/model/todo";
import { Types } from "mongoose";

export async function getItems(): Promise<Todo[]> {
	try {
		await connectMongo();
		const todos = await ToDo.find({}).lean<Todo[]>();
		const formattedTodos = todos.map((todo) => ({
			_id: todo._id.toString(),
			text: todo.text,
			completed: todo.completed,
		}));
		return formattedTodos;
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function createItem(text: Todo["text"]) {
	try {
		await connectMongo();
		const newTodo = new ToDo({
			_id: new Types.ObjectId(), // Manually provide an _id
			text,
			completed: false, // Default to false when creating a new task
		});
		await newTodo.save();
		console.log("Created new Todo:", newTodo);
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function deleteItem(id: Todo["_id"]) {
	try {
		await connectMongo();
		const deleted = await ToDo.findByIdAndDelete(id);
		console.log("Deleted Todo:", deleted);
	} catch (e) {
		console.error(e);
		throw e;
	}
}

async function setCompleted(id: Todo["_id"], completed: boolean) {
	try {
		await connectMongo();
		const updated = await ToDo.findByIdAndUpdate(id, { completed }, { new: true });
		console.log("Updated Todo:", updated);
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function markIncomplete(id: Todo["_id"]) {
	await setCompleted(id, false);
}

export async function markDone(id: Todo["_id"]) {
	await setCompleted(id, true);
}

export const updateItem = async (id: Todo["_id"], text: Todo["text"]) => {
	try {
		await connectMongo();
		const updated = await ToDo.findByIdAndUpdate(id, { text }, { new: true, runValidators: true });
		console.log("Updated Todo:", updated);
	} catch (e) {
		console.error(e);
		throw e;
	}
};
