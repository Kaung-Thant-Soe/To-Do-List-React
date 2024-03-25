import { useState } from "react";
import "./App.css";
const initialData = [
  { id: 0, title: "Morning-Exercise", done: true },
  { id: 1, title: "Breakfast", done: false },
  { id: 2, title: "Study", done: false },
];
let nextId = 0;
let nextDone;
export default function App() {
  nextId = initialData.id;
  const [name, setName] = useState("");
  const [datas, setData] = useState(initialData);
  function handleAddTodo() {
    setData([...datas, { id: nextId++, title: name }]);
    setName("");
  }

  return (
    <div className="card">
      <h1>To Do List</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputValue"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {datas.map((item) => (
          <li key={item.id}>
            <input
              className="box"
              type="checkbox"
              onChange={() => {
                setData(datas.filter((a) => a.id !== item.id));
              }}
              checked={nextDone}
            />

            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
