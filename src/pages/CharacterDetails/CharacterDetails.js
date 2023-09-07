import React from "react";
import "./CharacterDetails.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import useCharacter from "../../hooks/useCharacter";
import { RingLoader } from "react-spinners";

const CharacterDetails = () => {
   const { characterID } = useParams();
   const { data, isLoading } = useCharacter(characterID);
   console.log(data);

   return (
      <>
         <Navbar />
         <Header />
         <section id="character-details">
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
                     <>
                        <div className="col-12">
                           <img src={data?.image} alt={data?.name} />
                        </div>
                        <div className="col-12">
                           <h2 className="character-name">{data?.name}</h2>
                           <h3 className="charachter-status">
                              {data?.status} - {data?.species}
                           </h3>
                        </div>
                        <div className="col-12">
                           <p className="title">Last known location:</p>
                           <h2 className="info">{data?.location.name}</h2>
                        </div>
                        <div className="col-12">
                           <p className="title">Origin:</p>
                           <h2 className="info">{data?.origin.name}</h2>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default CharacterDetails;
