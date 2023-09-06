import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ name, image, status, species, location, origin }) => {
   return (
      <div className="card">
         <div className="row">
            <div className="col-12">
               <div className="card__img">
                  <img src={image} alt={name} />
               </div>
            </div>
            <div className="col-12">
               <div className="card__body">
                  <div className="row">
                     <div className="col-12">
                        <h2 className="character-name">{name}</h2>
                        <h3 className="charachter-status">
                           {status} - {species}
                        </h3>
                     </div>
                     <div className="col-12">
                        <p className="title">Last known location:</p>
                        <h2 className="info">{location.name}</h2>
                     </div>
                     <div className="col-12">
                        <p className="title">Origin:</p>
                        <h2 className="info">{origin.name}</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CharacterCard;
