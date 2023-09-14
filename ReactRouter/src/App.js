import { useRoutes,generatePath } from "react-router-dom";
import routes from "./routes";
import { url} from "./utils";
//import {Routes,Route,Link,NavLink} from 'react-router-dom'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import BlogLayout from './pages/blog'
// import Categories from './pages/blog/Categories'
// import Post from './pages/blog/Post'
// import Blog from './pages/blog/Blog'
// import Page404 from './pages/Page404';
// import Blog404 from './pages/blog/Blog404';
// import Profile from './pages/Profile';
// import PrivateRoute from './components/PrivateRoute';
// import AuthLayout from './pages/auth/AuthLayout';
// import Login from './pages/auth/Login';
// import HomeLayout from './pages/HomeLayout';

function App() {
  //console.log(generatePath('post/:id/:url',{id:2,url:'test-url'}))
  
  console.log(url('home'))
  console.log(url('home.blog.categories'))
  console.log(url('home.blog.post',{id:3,url:'test-adana'}))
  
  return useRoutes(routes)

  // return (
  //   <>
      
  //     <Routes>
  //       <Route path='/' element={<HomeLayout/>}> 
  //           <Route index={true} element={<Home/>}/>
  //           <Route path='contact' element={<Contact/>}/> 
  //           <Route path='blog' element={<BlogLayout/>}>
  //               <Route index={true} element={<Blog/>}/>
  //               <Route path='categories' element={<Categories/>}/>
  //               <Route path='post/:id/:url' element={<Post/>}/>  
  //               <Route path='*' element={<Blog404/>}/>
  //           </Route>
  //           <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
  //       </Route>  
         
  //       <Route path='/auth' element={<AuthLayout/>}>
  //           <Route path='login' element={<Login/>}/>
  //       </Route>
  //       <Route path='*' element={<Page404/>}/>
  //     </Routes>
  //   </>
  // );
}

export default App;
