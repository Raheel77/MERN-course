import React from "react";
import {React_Icons_Examples} from "./components/React_Icons_Examples";
import Navbar_Component from "./components/Navbar_Component";
import SwipeableTextMobileStepper from "./components/Caurosel_Component";
import {Products} from "./components/Products";
import Header from "./components/Header";
import Category from "./components/Category";
import Footer from "./components/Footer";



import Category_list from "./components/Category_list";
import Recomended from "./components/Recomended";

const App = () => {
  return (
    <>

      <Header/>
      <SwipeableTextMobileStepper />
      <Category  />
      {/*<Recomended />*/}
      <Category_list />
      <Footer/>
      {/*<Products />*/}
    </>
  );
};

export default App;
