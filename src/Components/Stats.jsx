import React from 'react'

const Stats = ({item}) => {
  
  const numItem = item.length;
  const numPacked = item.filter((val)=>
    val.packed === true
  ).length;
  const percent = (numPacked/numItem)*100
  return (
    <div className="stats">
       You have {numItem} items on your list, and you already packed {numPacked}({percent}%)
    </div>
  )
}

export default Stats
