import { useQueries } from "react-query";

const characterFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/character").then((response) =>
      response.json()
   );
};

const locationFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/location").then((response) =>
      response.json()
   );
};

const episodeFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/episode").then((response) =>
      response.json()
   );
};

const useData = () => {
   return useQueries([
      { queryKey: "character", queryFn: characterFetcher },
      { queryKey: "location", queryFn: locationFetcher },
      { queryKey: "episode", queryFn: episodeFetcher },
   ]);
};

export default useData;
