import { useState } from "react";
import type { Todo } from "./App";
import ToDoItem from "./ToDoItem";

type ToDoListProps = {
  todos: Todo[];
};

function ToDoList({ todos: initialTodos }: ToDoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newText, setNewText] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const text = newText.trim();
    if (!text) return;
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
    setNewText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full max-w-xl">
      <h1 className="mb-6 text-4xl font-bold">To Do List</h1>

      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded border border-gray-300 px-3 py-2"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="text-gray-400">Nothing to do 🎉</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
