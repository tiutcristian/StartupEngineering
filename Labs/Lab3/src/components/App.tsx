import "../App.css";
import "../index.css";

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
      {/* TODO: use ToDoList.tsx component here*/}
    </div>
  );
}

export default App;
