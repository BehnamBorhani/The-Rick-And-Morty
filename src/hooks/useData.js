import { useQueries } from "@tanstack/react-query";

const charactersFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/character").then((response) =>
      response.json()
   );
};

const locationsFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/location").then((response) =>
      response.json()
   );
};

const episodesFetcher = () => {
   return fetch("https://rickandmortyapi.com/api/episode").then((response) =>
      response.json()
   );
};

const useData = () => {
   return useQueries({
      queries: [
         { queryKey: ["Characters"], queryFn: charactersFetcher },
         { queryKey: ["Locations"], queryFn: locationsFetcher },
         { queryKey: ["Episodes"], queryFn: episodesFetcher },
      ],
   });
};

export default useData;
