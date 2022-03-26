import React, { useContext } from "react";
import SectionHeader from "../../components/sections/header/Header";
import SectionFooter from "../../components/sections/footer/Footer";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import Product from "../../components/productList/Product";
import { ProductContext } from "../../context/productContext";

function Home() {
  const {copiaItems} = useContext(ProductContext); 
 
  
  return (
    <>
    <Menu/>
       <div className="content-home">
        <SectionHeader/>
        <Product copiaItems = {copiaItems}/>
        <SectionFooter/>
      </div>
      <Footer/>
      </>
  );
}
export default Home;
