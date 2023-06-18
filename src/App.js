// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./component/Home"
import Header from './component/Header';
import Project from './component/Project';
import Blog from './component/Blog';
import Contact from './component/Contact'
import Skill from "./component/Skill"


function App() {
  return (
   <>
   <BrowserRouter>
   <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/project' element={<Project></Project>} />
    <Route path='/skill' element={<Skill></Skill>} />
    <Route path='/blog' element={<Blog></Blog>} />
    <Route path='/contact' element={<Contact></Contact>} />
    <Route path='*' element={<h2>404 Page Not Found</h2>} />
   </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
