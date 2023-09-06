import React, { useEffect, useState } from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import axios from "axios";

const Characters = () => {
   const [characters, setCharacters] = useState([]);
   useEffect(() => {
      axios
         .get("https://rickandmortyapi.com/api/character")
         .then((response) => setCharacters(response.data.results));
   }, []);
   // console.log(characters);

   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               {characters.length &&
                  characters.map((character) => (
                     <div
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                        key={character.id}
                     >
                        <CharacterCard {...character} />
                     </div>
                  ))}
            </div>
         </div>
      </section>
   );
};

export default Characters;
