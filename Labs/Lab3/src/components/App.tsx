import "../App.css";
import "../index.css";
import ToDoList from "./ToDoList";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const todosInitial: Todo[] = [
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a todo app", completed: true },
    { id: "3", text: "Deploy to production", completed: false },
  ];

  return (
    <div className="flex justify-center font-mono">
      <ToDoList todos={todosInitial} />
    </div>
  );
}

export default App;
