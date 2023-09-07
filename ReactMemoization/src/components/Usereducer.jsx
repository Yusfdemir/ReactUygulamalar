// Çok fazla usestate kullanımı yapınca bunu daha efektif hale getirmek için kullandığımız bir hook
import React,{useState,useReducer, useCallback, useMemo} from 'react'
import ToDoReducer from './ToDoReducer'
import Header from './Header'
import AddTodo from './AddTodo'
import Todos from './Todos'


const Usereducer = () => {
    console.log("reducer render")
    const [state,dispatch]=useReducer(ToDoReducer,{
        todos:[],
        todo:'',
        search:''
    })
    
    const submitHandle = useCallback( e =>{
            e.preventDefault();
            dispatch({
                type:'ADD_TODO',
                todo:state.todo
            })
        },[state.todo])

    const onChange=useCallback(e=>{
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    },[])

    const searchHandle=e=>{
        dispatch({
            type:'SET_SEARCH',
            value:e.target.value
        })
    }
    const [count,setCount]=useState(0)

    const filteredTodos=useMemo(()=>{
        return state.todos.filter(todo=>todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    },[state.todos,state.search])

    return (  
    <>
        <Header/>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count=>count+1)}>ARTTIR</button>
        <hr />
        <div>ToDo App</div>
        <input type="text" value={state.search} placeholder='ToDolarda Ara' onChange={searchHandle}/>
        {state.search}
        <hr />
        {/**Bir komponente props olarak fonksiyon geçiyorsak onun gereksiz renderlanmasını sadece memo ile önleyemeyiz useCallback te kullanmamız lazım*/}
        <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
        {/**props olarak obje geçince iki objenin içeriği aynı olsa bile referansı farklı olduğundan react bunların eşit olduğunu anlayamaz ve gereksiz render eder bunun için useMemo kullanırız */}
        <Todos todos={filteredTodos}/>
    </>
  )
}

export default Usereducer