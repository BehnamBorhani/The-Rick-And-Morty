import React, { useState } from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import { RingLoader } from "react-spinners";
import SearchBox from "../SearchBox/SearchBox";
import useFilter from "../../hooks/useFilter";

const Characters = () => {
   const [name, setName] = useState("");
   const [gender, setGender] = useState("");
   const [status, setStatus] = useState("");
   const { data: filteredData, isLoading } = useFilter(name, gender, status);

   return (
      <section id="characters">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <SearchBox
                     name={name}
                     setName={setName}
                     gender={gender}
                     setGender={setGender}
                     status={status}
                     setStatus={setStatus}
                  />
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
                  filteredData?.results?.map((character) => (
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
