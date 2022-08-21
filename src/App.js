import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Home/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Error from "./components/Share/Error/Error";

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
        <Route path="/about" element={<About></About>}></Route>   
        <Route path="/login" element={<Login></Login>}></Route>   
        <Route path="*" element={<Error></Error>}></Route>   
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
