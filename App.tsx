import React, { useState, useRef } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const queryRef = useRef(null);

  const handleSubmit = () => {
    setTodos(p => [...p, query]);
    setQuery("");
    if (queryRef && queryRef.current) {
      // @ts-ignore
      queryRef.current.value = "";
    }
  };

  return (
    <div className="App mt-40 justify-center items-center">
      <p className="text-2xl mb-20">TODO app</p>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal mx-auto"
        placeholder="new todo"
        onChange={event => setQuery(event.target.value)}
        ref={queryRef}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8"
        onClick={() => handleSubmit()}
      >
        add
      </button>

      {todos.map((value, key) => (
        <Todo key={key} text={value} />
      ))}
    </div>
  );
}

export default App;
