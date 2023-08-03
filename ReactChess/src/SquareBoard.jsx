import React from 'react'

const SquareBoard = ({brd}) => {
    const pieceImage=require(`../public/assets/${brd.type}_${brd.color}.png`);
    return (
    <div>
        <img src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard