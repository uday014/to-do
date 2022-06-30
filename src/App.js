import React, { useState } from "react";

document.body.style.backgroundImage =
  "url('https://th.bing.com/th/id/OIP.5oXuv0uB6YaN4YcgoEI-RAHaEo?w=253&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')";

function App() {
  const [input, setInput] = useState("");
  const [value, newValue] = useState([]);

  function handle(event) {
    const newinput = event.target.value;
    setInput(newinput);
  }
  function addValue() {
    newValue((prevItem) => {
      return [...prevItem, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="Heading">
        <h1>To-do-list</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={input} />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {value.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
