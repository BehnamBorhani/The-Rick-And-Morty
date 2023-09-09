import { useQuery, useQueryClient } from "@tanstack/react-query";

const useEpisode = (episodeUrl) => {
   const queryClient = useQueryClient();
   const episodeID = episodeUrl?.split("/").pop();

   return useQuery(
      ["Episode", episodeID],
      () => fetch(episodeUrl).then((response) => response.json()),
      {
         initialData: () => {
            const episodes = queryClient.getQueryData(["Episodes"]);
            const episode = episodes?.results?.find(
               (episode) => episode.url === episodeUrl
            );

            return episode ? episode : undefined;
         },
      }
   );
};

export default useEpisode;
