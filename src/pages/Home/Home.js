import React from "react";
import "./Home.scss";
import Characters from "../../components/Characters/Characters";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
   return (
      <>
         <Navbar />
         <Header />
         <Characters />
         <Footer />
      </>
   );
};

export default Home;
