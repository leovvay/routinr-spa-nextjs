import { QueryClient } from 'react-query';

import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
  {
    credentials: 'include',
  }
);

export default graphQLClient;

// TODO react-query is needed only for 'infinity scroll'. Remove when RTK Query's solution will be ready.
// Create a client
export const queryClient = new QueryClient();
