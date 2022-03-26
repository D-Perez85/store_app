import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import NotFound from "../404/notFound"; 
import Contact from "../contact/contact";
import Coin from "../coins/coin";
import LoginCard from "../login/login";
import Register from "../register/register"; 
import History from "../history/history";

function Principal() {
  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginCard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/coins" element={<Coin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/*" element={<NotFound/>} />

         </Routes>
      </div>
     </Router>
    </>
  );
}
export default Principal;


