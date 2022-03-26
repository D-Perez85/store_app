import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import NotFound from "../404/notFound"; 


function Principal() {
  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/*" element={<NotFound/>} />

         </Routes>
      </div>
     </Router>
    </>
  );
}
export default Principal;


