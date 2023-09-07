import React from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacters from "../../hooks/useCharacters";
import { RingLoader } from "react-spinners";

const Characters = () => {
   const { data, isLoading } = useCharacters();

   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               {isLoading ? (
                  <div className="col-12">
                     <RingLoader
                        color="#36d7b7"
                        className="loader"
                        size={100}
                     />
                  </div>
               ) : (
                  data?.results?.map((character) => (
                     <div
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                        key={character.id}
                     >
                        <CharacterCard {...character} />
                     </div>
                  ))
               )}
            </div>
         </div>
      </section>
   );
};

export default Characters;
