import { useQuery } from "react-query";

const useCharacters = () => {
   return useQuery(
      "characters",
      () =>
         fetch("https://rickandmortyapi.com/api/character").then((response) =>
            response.json()
         ),
      {
         cacheTime: 360000, //cash for 6 minutes
         staleTime: 60000, //stale after 1 minute
      }
   );
};

export default useCharacters;
