import{useEffect,useState}from'react'
import { getPosts ,getPostDetail,newPost,getUsers} from './services';
function App2(){
    useEffect(()=>{
        console.log(process.env.REACT_APP_API_URL)
        getPosts().then(res=>console.log(res))
        getPostDetail(2).then(res=>console.log(res))
        newPost({
            userId:3,
            title:'test',
            body:'test'
        }).then(res=>console.log(res))
        getUsers().then(res=>console.log(res))
    })
    return (
        <>
            App2
        </>
    )
}

export default App2;