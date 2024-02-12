import React from "react";
import SwipeableTextMobileStepper from "./components/Caurosel_Component";
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
      <Category_list />
      <Footer/>
    </>
  );
};

export default App;
