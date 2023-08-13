import { useState, useEffect, useRef } from 'react';
import './App.css';

const data=[
  {
    id:1,
    title:"test 1"
  },
  {
    id:2,
    title:"test 2"
  },
  {
    id:3,
    title:"Deneme 1"
  },
  {
    id:4,
    title:"Deneme 1"
  }
]
function App() {
  const [search,setSearch]=useState('')
  const [result,setResult]=useState(false)
  const searchRef=useRef()

  const isTyping=search.replace(/\s+/,'').length>0;


  useEffect(()=>{
    document.addEventListener('mousedown',handleClickOutside)
    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[])

  const handleClickOutside=(e)=>{
    if(searchRef.current && !searchRef.current.contains(e.target)){
      setSearch('')
    }
  }
  useEffect(()=>{
    if(isTyping){
      const filteredResult=data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()));
      setResult(filteredResult.length > 0 ? filteredResult : false)
    }else{
      setResult(false)
    }

    const getData=setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${search}`)
      .then(res=>res.json())
      .then(data=>setResult(data))  
    }, 500);

    return ()=>{
      clearTimeout(getData)
    }

  },[search])

  return (
    <>
    <div className='search' ref={searchRef}>
      <input type="text" value={search} className={isTyping ? 'typing':null} placeholder='Bir şeyler ara...' onChange={(e)=>{setSearch(e.target.value)}} />
      
      { isTyping && (
        <div className='search-result'>
          {result && result.map(item=>(
            <div key={item.id} className='search-result-item' >
              {item.name}
            </div>
          ))}
          {!result&& (
            <div className='result-not-found'>
              "{search}" ile ilgili birşey bulamadık!
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
}

export default App;
