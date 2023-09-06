import {forwardRef, useRef} from 'react'
// useRef jsx elemenlarını ref'lemek için kullanılır
// forwardRef componentleri ref'lemek için kulanılır
const Useref = () => {
    const inputRef=useRef()

    const focusInput=()=>{
        inputRef.current.focus();
    }

  return (
    <>
        <h1>UseRef-forwardRef</h1>
        <Input ref={inputRef}/>
        <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
function Input(props,ref){
    return <input type='text' ref={ref} {...props}/>
}
Input=forwardRef(Input);

// const Input=forwardRef((props,ref)=>{
//     return <input type='text' ref={ref} {...props}/>
// })

export default Useref