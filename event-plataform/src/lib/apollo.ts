import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4olf2gx0eo101z40fiub6qk/master",
  cache: new InMemoryCache(),
});
