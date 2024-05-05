import { GraphQLClient } from "graphql-request";
import { getFromStorage } from "./storage";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorization: isClient
        ? `Bearer ${getFromStorage("__twitter_key")}`
        : "",
    }),
  }
);
