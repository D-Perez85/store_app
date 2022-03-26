import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import NotFound from "../404/notFound"; 
import Contact from "../contact/contact";


function Principal() {
  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<NotFound/>} />

         </Routes>
      </div>
     </Router>
    </>
  );
}
export default Principal;


