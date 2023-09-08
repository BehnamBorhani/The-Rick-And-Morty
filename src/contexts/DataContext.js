import { createContext } from "react";
import useData from "../hooks/useData";

export const CharactersContext = createContext();
export const LocationsContext = createContext();
export const EpisodesContext = createContext();

const DataProvider = ({ children }) => {
   const [character, location, episode] = useData();

   return (
      <CharactersContext.Provider value={character}>
         <LocationsContext.Provider value={location}>
            <EpisodesContext.Provider value={episode}>
               {children}
            </EpisodesContext.Provider>
         </LocationsContext.Provider>
      </CharactersContext.Provider>
   );
};

export default DataProvider;
