import React from 'react'
import { DragPreviewImage,useDrag } from 'react-dnd'
const SquareBoard = ({brd,positionCntrl}) => {
    const pieceImage=require(`../public/assets/${brd.type}_${brd.color}.png`);
    const [{isDragging}, drag, preview] = useDrag({
      type:'chess',
      item: { id:`${positionCntrl}_${brd.type}_${brd.color}`},
      collect:(monitor)=>{
        return {isDragging : !!monitor.isDragging }
      }
    })

    return (
    <div ref={drag}>
      <DragPreviewImage src={pieceImage}  connect={preview} />
      <img src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard