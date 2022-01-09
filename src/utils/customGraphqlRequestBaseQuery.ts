import { ClientError } from 'graphql-request';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { DocumentNode } from 'graphql';
import { RequestHeaders } from '@rtk-query/graphql-request-base-query/src/index';

import graphQLClient from '@store/graphql.client';

const graphqlRequestBaseQuery = (options: {
  requestHeaders?: RequestHeaders;
}): BaseQueryFn<
  { document: string | DocumentNode; variables?: any },
  unknown,
  Pick<ClientError, 'name' | 'message' | 'stack'>,
  Partial<Pick<ClientError, 'request' | 'response'>>
> => {
  const client = graphQLClient;
  if ('requestHeaders' in options) {
    client.setHeaders(options.requestHeaders);
  }
  return async ({ document, variables }) => {
    try {
      return { data: await client.request(document, variables), meta: {} };
    } catch (error) {
      if (error instanceof ClientError) {
        const { name, stack, request, response } = error;
        const message =
          response.errors?.map((graphError) => graphError.message).join() ?? '';
        return { error: { name, message, stack }, meta: { request, response } };
      }
      throw error;
    }
  };
};

export default graphqlRequestBaseQuery;
