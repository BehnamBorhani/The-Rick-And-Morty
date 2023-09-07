import { useQuery } from "react-query";

const useCharacter = (id) => {
   return useQuery(
      ["character", id],
      () =>
         fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
            (response) => response.json()
         ),
      {
         cacheTime: 360000, //cash for 6 minutes
         staleTime: 60000, //stale after 1 minute
      }
   );
};

export default useCharacter;
