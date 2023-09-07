import React from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <>
         <Navbar />
         <Header />
         <Characters/>
         <Footer/>
      </>
   );
}

export default App;
