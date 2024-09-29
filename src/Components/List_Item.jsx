import React from "react";

const List_Item = ({ item , handle_delete,handle_change}) => {
  return (
    <div>
      <li key={item.id}>
        <input type='checkbox' value={item.packed} onChange={()=>{handle_change(item.id)}}></input>
        <span style={item.packed ? {textDecoration:"line-through"}:{}}>
          {item.quantity} {item.des}
        </span>
        <button onClick={()=>{handle_delete(item.id)}}> ❌</button>
      </li>
    </div>
  );
};

export default List_Item;
