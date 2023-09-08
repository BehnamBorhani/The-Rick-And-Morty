import React, { useContext } from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import { RingLoader } from "react-spinners";
import { CharactersContext } from "../../contexts/DataContext";
import SearchBox from "../SearchBox/SearchBox";

const Characters = () => {
   const { data, isLoading } = useContext(CharactersContext);

   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <SearchBox />
               </div>
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
