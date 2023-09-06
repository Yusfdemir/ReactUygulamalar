// Çok fazla usestate kullanımı yapınca bunu daha efektif hale getirmek için kullandığımız bir hook
import React,{useState,useReducer} from 'react'
import ToDoReducer from './ToDoReducer'


const Usereducer = () => {
    const [state,dispatch]=useReducer(ToDoReducer,{
        todos:[],
        todo:''
    })

    // const [todos,setTodos]=useState([]);
    // const [todo,setTodo]=useState('')
    
    const submitHandle = (e) =>{
        e.preventDefault();
        dispatch({
            type:'ADD_TODO',
            todo:state.todo
        })
        // setTodos([...todos,todo])
        // setTodo("")
    }
    const onChange=e=>{
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    } 
    return (  
    <>
        {/*Stateler ile yapılırssa  */}
        {/* <h1>ToDo App</h1>
        <form action="" onSubmit={submitHandle}>
            <input type="text"  value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
            <button disabled={!todo} type='submit'>Ekle</button>
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul> */}


        <h1>ToDo App</h1>
        <form action="" onSubmit={submitHandle}>
            <input type="text"  value={state.todo} onChange={onChange}/>
            <button disabled={!state.todo} type='submit'>Ekle</button>
        </form>
        <ul>
            {state.todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </>
  )
}

export default Usereducer