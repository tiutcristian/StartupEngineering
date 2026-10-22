import { useState } from "react";
import type { Todo } from "./App";

type ToDoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

function ToDoItem({ todo, onToggle, onEdit, onDelete }: ToDoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const startEdit = () => {
    setDraft(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const text = draft.trim();
    if (!text) return;
    onEdit(todo.id, text);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center gap-3 border-b border-gray-200 py-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
            if (e.key === "Escape") cancelEdit();
          }}
          autoFocus
          className="flex-1 rounded border border-gray-300 px-2 py-1"
        />
      ) : (
        <span
          className={`flex-1 text-left ${
            todo.completed ? "text-gray-400 line-through" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <>
          <button onClick={saveEdit} className="!px-3 !py-1 text-sm">
            Save
          </button>
          <button onClick={cancelEdit} className="!px-3 !py-1 text-sm">
            Cancel
          </button>
        </>
      ) : (
        <button onClick={startEdit} className="!px-3 !py-1 text-sm">
          Edit
        </button>
      )}
      <button
        onClick={() => onDelete(todo.id)}
        className="!px-3 !py-1 text-sm text-red-600"
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
