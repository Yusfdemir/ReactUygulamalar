import {useEffect, useState} from 'react'

const Lifecycle = () => {
    const [post,setPost]=useState(1);
    const [postData,setPostData]=useState(false)
    // useEffect(()=>{
    //     //component render olduğunda 
    // })

    useEffect(()=>{
        //component ilk render olduğunda 
        return ()=>{
            //component destroy
        }
    },[])

    useEffect(()=>{
       //count değeri değişince  
       fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
       .then(res=>res.json())
       .then(data=>setPostData(data) ) 
    },[post])

  return (
    <>
    <h3>{post}</h3>
    <div>{post && JSON.stringify(postData)}</div>
    <button onClick={()=>setPost(post=>post+1)}>Sonraki Konu</button>
    <br /><hr />
    <div>Lifecycle</div>
    </>
    
  )
}

export default Lifecycle