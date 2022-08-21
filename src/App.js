import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Home/Blogs/Blogs";
import Home from "./components/Home/Home/Home";

import Footer from "./components/Share/Footer/Footer";
import Nav from "./components/Share/Nav/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
