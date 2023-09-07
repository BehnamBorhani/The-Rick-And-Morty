import React, { useEffect, useState } from "react";
import "./CharacterDetails.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
   const { characterID } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios
         .get(`https://rickandmortyapi.com/api/character/${characterID}`)
         .then((response) => setCharacter(response.data));
   }, []);
   console.log(character);

    
   return (
      <>
         <Navbar />
         <Header />
        {/*  <section id="character-details">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <img src={character?.image} alt={character?.name} />
                  </div>
                  <div className="col-12">
                        <h2 className="character-name">{character?.name}</h2>
                        <h3 className="charachter-status">
                           {character?.status} - {character?.species}
                        </h3>
                     </div>
                     <div className="col-12">
                        <p className="title">Last known location:</p>
                        <h2 className="info">{character?.location.name}</h2>
                     </div>
                     <div className="col-12">
                        <p className="title">Origin:</p>
                        <h2 className="info">{character?.origin.name}</h2>
                     </div>
               </div>
            </div>
         </section> */}
         <Footer />
      </>
   );
};

export default CharacterDetails;
