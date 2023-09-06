import React from "react";
import "./Header.scss";

const Header = () => {
   return (
      <header id="header">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header__wrapper">
                     <h1 className="header__title">The Rick and Morty</h1>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
