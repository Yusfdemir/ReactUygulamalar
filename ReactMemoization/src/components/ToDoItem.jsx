import React,{memo} from 'react'

const ToDoItem = ({todo}) => {
    console.log("ToDo Item rendered")
  return (
    <>
        <li>{todo}</li>
    </>
  )
}

export default memo(ToDoItem)