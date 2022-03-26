import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/home";


function Principal() {
  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
         </Routes>
      </div>
     </Router>
    </>
  );
}
export default Principal;


