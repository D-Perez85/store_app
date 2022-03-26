import React from "react";
import SectionHeader from "../../components/sections/header/Header";
import SectionFooter from "../../components/sections/footer/Footer";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
 
function Home() {
  
  return (
    <>
    <Menu/>
       <div className="content-home">
        <SectionHeader/>
        <SectionFooter/>
      </div>
      <Footer/>
      </>
  );
}
export default Home;
