import { createContext } from "react";
import useData from "../hooks/useData";

export const CharacterContext = createContext();
export const LocationContext = createContext();
export const EpisodeContext = createContext();

const DataProvider = ({ children }) => {
   const [character, location, episode] = useData();

   return (
      <CharacterContext.Provider value={character}>
         <LocationContext.Provider value={location}>
            <EpisodeContext.Provider value={episode}>
               {children}
            </EpisodeContext.Provider>
         </LocationContext.Provider>
      </CharacterContext.Provider>
   );
};

export default DataProvider;
