import { useQuery } from "react-query";

const useCharacters = () => {
   return useQuery("Characters", () =>
      fetch("https://rickandmortyapi.com/api/character").then((response) =>
         response.json()
      )
   );
};

export default useCharacters;
