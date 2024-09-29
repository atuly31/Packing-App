import React, { useState } from "react";
import List_Item from "./List_Item";
const PackingList = ({ item, handle_delete, handle_change }) => {
  const [sort, sortby] = useState("input");
  let sortItem;
  if (sort === "input") sortItem = item;

  if (sort === "des")
    sortItem = item
      .slice()
      .sort((a, b) => a.des.localeCompare(b.des));

  if (sort==="packed"){
    sortItem = item.slice().sort((a,b)=> Number(a.packed)-Number(b.packed))
  }

  return (
    <div className="list">
      <ul>
        {sortItem.map((item, idx) => (
          <List_Item
            key={idx}
            item={item}
            handle_delete={handle_delete}
            handle_change={handle_change}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sort} onChange={(e) => sortby(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="des">SORT BY Description</option>
          <option value="packed">SORT BY PACKED ITEM</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
