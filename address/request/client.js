import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { getTokenRequestAndSave } from './authorize';
import ENDPOINTS from '@/constants/endpoints';

export const getToken = () => {
  const auth = localStorage.getItem('accessToken');
  if (!auth) {
    return null;
  }
  if (auth === 'error') {
    return null;
  }
  return JSON.parse(auth);
};

const httpLink = createHttpLink({
  uri: ENDPOINTS.ADDR_GRAPHQL,
  credentials: 'include',
  withCredentials: true,
  headers: {
    authorization: `Bearer ${getToken()}`,
  },
});

const linkErr = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError.response.status === 401) {
    getTokenRequestAndSave();
    if (getToken()) {
      window.location.reload();
    }
  }
});

const link = ApolloLink.from([linkErr, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
