import React from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacters from "../../hooks/useCharacters";

const Characters = () => {
   const { data } = useCharacters();

   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               {data?.results?.map((character) => (
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
