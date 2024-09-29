import React from "react";

const List_Item = ({ item, handle_delete, handle_change }) => {
  return (
   
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handle_change(item.id)}
        ></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.des}
        </span>
        <button
          onClick={() => {
            handle_delete(item.id);
          }}
        >
          ❌
        </button>
      </li>
   
  );
};

export default List_Item;
