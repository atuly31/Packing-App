import React, { useState } from "react";

const Form = ({handle_add_obj}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [des, setdes] = useState("");
  const [quantity, setquantity] = useState(1);
  
 
 
  
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!des) return;
    const new_obj = { id: Date.now(), des, quantity, packed: false };
    handle_add_obj(new_obj)
    
    setdes("");
    setquantity(1);
  };
  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>What do you need for Your😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setquantity(Number(e.target.value));
        }}
      >
        {arr.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item"
        value={des}
        onChange={(e) => {
          setdes(e.target.value);
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
