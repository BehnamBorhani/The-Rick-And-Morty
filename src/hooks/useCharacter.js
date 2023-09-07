import { useQuery, useQueryClient } from "react-query";

const useCharacter = (id) => {
   const queryClient = useQueryClient();

   return useQuery(
      ["SingleCharacter", id],
      ({ queryKey }) =>
         fetch(`https://rickandmortyapi.com/api/character/${queryKey[1]}`).then(
            (response) => response.json()
         ),
      {
         initialData: () => {
            const characters = queryClient.getQueryData(["Characters"]);
            const character = characters?.results?.find(
               (character) => character.id === +id
            );

            if (character) {
               return { data: character };
            } else {
               return undefined;
            }
         },
      }
   );
};

export default useCharacter;
