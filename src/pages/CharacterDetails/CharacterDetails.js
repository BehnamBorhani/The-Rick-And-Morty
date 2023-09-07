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
                           <img
                              src={data?.image}
                              alt={data?.name}
                              className="character-image"
                           />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <h2 className="character-name">{data?.name}</h2>
                           <h3 className="character-status">
                              {data?.status} - {data?.species}
                           </h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <p className="title">Gender:</p>
                           <h2 className="info">{data?.gender}</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <p className="title">Last known location:</p>
                           <h2 className="info">{data?.location.name}</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <p className="title">Origin:</p>
                           <h2 className="info">{data?.origin.name}</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <p className="title">First seen in:</p>
                           <h2 className="info">{data?.episode[0]}</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <p className="title">Created at:</p>
                           <h2 className="info">{data?.created}</h2>
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
