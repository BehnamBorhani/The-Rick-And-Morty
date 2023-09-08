import { useQuery, useQueryClient } from "react-query";

const useFilter = (name, gender, status) => {
   const queryClient = useQueryClient();
   let params = "";
   if (name) {
      params += `name=${name}&`;
   }
   if (gender) {
      params += `gender=${gender}&`;
   }
   if (status) {
      params += `status=${status}&`;
   }

   return useQuery(
      ["FilteredCharacters"],
      () =>
         fetch(`https://rickandmortyapi.com/api/character/?${params}`).then(
            (response) => response.json()
         ),
      {
         initialData: () => {
            const characters = queryClient.getQueryData(["Characters"]);
            const filteredCharacters = characters?.results?.find(
               (character) =>
                  character.name === name ||
                  character.gender === gender ||
                  character.status === status
            );

            return filteredCharacters ? filteredCharacters : undefined;
         },
         refetchInterval: 2000
      }
   );
};

export default useFilter;
