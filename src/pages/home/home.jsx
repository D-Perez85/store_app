import React, { useContext, useState } from "react";
import SectionHeader from "../../components/sections/header/Header";
import SectionFooter from "../../components/sections/footer/Footer";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import Product from "../../components/productList/Product";
import { ProductContext } from "../../context/productContext";

function Home() {
  const { copiaItems } = useContext(ProductContext);
  const [page, setPage] = useState(false);
  const itemSlice = page ? copiaItems.slice(16, 32) : copiaItems.slice(0, 16);

  return (
    <>
      <Menu />
      <div className="content-home">
        <SectionHeader page={page} setPage={setPage} />
        <Product itemSlice={itemSlice} />
        <SectionFooter page={page} setPage={setPage} itemSlice={itemSlice} />
      </div>
      <Footer />
    </>
  );
}
export default Home;

