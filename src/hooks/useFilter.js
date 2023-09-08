import { useQuery, useQueryClient } from "react-query";

const useFilter = (id) => {
   const queryClient = useQueryClient();

   return useQuery(
      ["SingleCharacter", id],
      () =>
         fetch(`https://rickandmortyapi.com/api/character/?`).then(
            (response) => response.json()
         ),
      {
         initialData: () => {
            const characters = queryClient.getQueryData(["Characters"]);
            const character = characters?.results?.find(
               (character) => character.id === +id
            );

            return character ? character : undefined;
         },
      }
   );
};

export default useFilter;