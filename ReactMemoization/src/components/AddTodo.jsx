import React,{memo} from 'react'

const AddTodo = ({submitHandle,onChange,todo}) => {
    console.log("Add ToDo rendered")
  return (
    <div>
        <form action="" onSubmit={submitHandle}>
            <input  type="text"  value={todo} onChange={onChange}/>
            <button  disabled={!todo} type='submit'>Ekle</button>
        </form>
    </div>
  )
}

export default memo(AddTodo)