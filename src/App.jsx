import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form" action="">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button className="btn btn-danger" onClick={() => setTodos((currentTodos) => currentTodos.filter((t) => t.id!== todo.id))}>
              Delete
            </button>
          </li>
        ))}
        
      </ul>
    </>
  );
}

export default App;
