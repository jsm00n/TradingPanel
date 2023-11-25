import { ApolloClient, InMemoryCache } from "@apollo/client";

export const subgraphClient = new ApolloClient({
    uri: import.meta.env.VITE_PUBLIC_SUBGRAPH_URL,
    cache: new InMemoryCache(),
});
