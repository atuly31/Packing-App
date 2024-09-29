import React from "react";
import List_Item from "./List_Item";
const PackingList = ({item,handle_delete,handle_change}) => {
  return (
    <div className="list">
      <ul>
        {item.map((item,idx) => (
          <List_Item key={idx} item={item} handle_delete={handle_delete}  handle_change={handle_change} />
        ))}
      </ul>
      <select>
        <optgroup label="SORT BY INPUT ORDER">
          <option value="1">1</option>
          <option value="2">2</option>
        </optgroup>
      </select>
    </div>
  );
};

export default PackingList;
