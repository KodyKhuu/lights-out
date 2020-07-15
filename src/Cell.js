import React from 'react'
import "./Cell.css"

const Cell = ({ flipCellsAroundMe, isLit }) => {

  const handleClick = (evt) => {
    flipCellsAroundMe();
  }

  let classes = "Cell" + (isLit ? " Cell-lit" : "");

  return (
    <td className={classes} onClick={handleClick} />
  )

}


export default Cell