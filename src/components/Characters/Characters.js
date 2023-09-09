import React, { useEffect, useState } from "react";
import "./Characters.scss";
import CharacterCard from "../CharacterCard/CharacterCard";
import { RingLoader } from "react-spinners";
import SearchBox from "../SearchBox/SearchBox";
import useFilter from "../../hooks/useFilter";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
   const [name, setName] = useState("");
   const [gender, setGender] = useState("");
   const [status, setStatus] = useState("");
   const [page, setPage] = useState(1);
   const {
      data: filteredData,
      isLoading,
      refetch,
   } = useFilter(page, name, gender, status);

   useEffect(() => {
      refetch();
   }, [page, name, gender, status]);

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
               <div className="col-12">
                  <Pagination
                     pageCount={filteredData?.info?.pages}
                     page={page}
                     setPage={setPage}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Characters;
