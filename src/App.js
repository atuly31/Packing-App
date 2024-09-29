import "./App.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import React, { useState } from "react";
function App() {
  const [item, setItem] = useState([]);

  const handle_add_obj = (obj) => {
    setItem((item) => [...item, obj]);
  };
  const handle_delete = (id) => {
    setItem((item) => item.filter((val) => val.id !== id));
  };

  const handle_change = (id) => {
    setItem((item) =>
      item.map((val) =>
        val.id === id ? { ...val, packed: !val.packed } : val
      )
    );
  };
  
  return (
    <div className="app">
      <Logo />
      <Form handle_add_obj={handle_add_obj} />
      <PackingList
        item={item}
        handle_delete={handle_delete}
        handle_change={handle_change}
      />
      <Stats item={item}/>
    </div>
  );
}

export default App;
