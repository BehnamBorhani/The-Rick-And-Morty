import React from "react";
import "./CharacterCard.scss";

const CharacterCard = () => {
   return (
      <div className="card">
         <div className="row">
            <div className="col-12">
               <div className="card__img">
                  <img src="./character.jpeg" alt="" />
               </div>
            </div>
            <div className="col-12">
               <div className="card__body">
                  <div className="row">
                     <div className="col-12">
                        <h2 className="character-name">Tony Galopagus</h2>
                        <h3 className="charachter-status">Alive - Human</h3>
                     </div>
                     <div className="col-12">
                        <p className="title">Last known location:</p>
                        <h2 className="info">Citadel of Ricks</h2>
                     </div>
                     <div className="col-12">
                        <p className="title">First seen in:</p>
                        <h2 className="info">The Rickshank Rickdemption</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CharacterCard;
