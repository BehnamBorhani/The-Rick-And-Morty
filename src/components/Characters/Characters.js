import React from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";

const Characters = () => {
   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
               <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CharacterCard />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Characters;
