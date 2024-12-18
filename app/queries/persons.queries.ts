import { useQuery } from "@tanstack/react-query";
import { directusClient } from "./directus-client";
import { readItems, readItem } from "@directus/sdk";
export const useGetPersonsQuery = () => {
  return useQuery({
    queryKey: ["persons"],
    queryFn: async () => {
      const result = await directusClient.request(
        readItems("persons", {
          fields: ["*", "tags.tags_id.*"],
        })
      );
      return result;
    },
  });
};
