import React,{memo} from 'react'
import ToDoItem from './ToDoItem'

const Todos = ({todos}) => {
    console.log('Todos rendered')
  return (
    <div>
        <ul>
            {todos.map((todo,index)=>(
               <ToDoItem key={index} todo={todo}/>
            ))}
        </ul>
    </div>
  )
}

export default memo(Todos) 