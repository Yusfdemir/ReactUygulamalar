import { useEffect, useState } from "react";
import { getPostDetail,newPost,getPosts } from "./services/post";


function App() {
  const [users,setUsers]=useState(false)
  const [name,setName]=useState('yusuf')
  const [avatar,setAvatar]=useState(false)

  const addPost=(data)=>{
    const headers=new Headers()
    //headers.append('Content-type','application/json') 
    // veriri formData formatında yollayıp Content-type'ı burada json olarak yollarsak hata alırız
    headers.append('Authorization','abc123cba')
    // formData kullanmanın avantajı : Json halinde dosya yollayamayız base64 çevirip o şekilde yollayabiliriz ama formData formatında dosya yollayabiliyoruz 
    const formData=new FormData()
    formData.append('userId',data.userId)
    formData.append('title',data.title)
    formData.append('body',data.body)

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      //body:JSON.stringify(data),
      body:formData,
      headers:headers
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    //getPosts().then(res=>console.log(res))
    //getPostDetail(2).then(res=>console.log(res))
    // newPost({
    //   userId:3,
    //   title:'test',
    //   body:'test'
    // }).then(res=>{console.log(res)})
  })
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .catch(err=>console.log(err))

      addPost({
        userId:1,
        title:'Örnek Post',
        body:'Post içeriği',
      })
  },[])

  const submitHandle=(e)=>{
    e.preventDefault()
    console.log("submit edildi")
    const formData=new FormData()
    formData.append('name',name)
    formData.append('avatar',avatar)

    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method:'POST',
    //   body:formData
    // })
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
        <input type="file" name="avatar" onChange={(e)=>{setAvatar(e.target.files[0])}}/> <br />
        <button type="submit" disabled={!name || !avatar}>Kaydet</button>
      </form>
      <h1>User List</h1>
      <ul>
      {
        users && users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))
      }
      </ul>
    </>
  );
}

export default App;
