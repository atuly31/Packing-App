import React from "react";

const Stats = ({ item }) => {
  const numItem = item.length;
  const numPacked = item.filter((val) => val.packed === true).length;
  
  const percent = numItem ===0 ? 0 : Math.round((numPacked / numItem)) * 100;
  
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? " You have everthing ready to go ✈️"
          : `💼You have ${numItem} items on your list, and you already packed ${numPacked}(${percent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
