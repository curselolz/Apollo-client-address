import client from './client';

export const fetchData = QueryResolver => {
  return Promise.resolve(
    client.query({
      query: QueryResolver,
    })
  ).then(value => value.data.query);
};

export const fetchDataWithVariables = (QueryResolver, payload) => {
  return Promise.resolve(
    client.query({
      query: QueryResolver,
      variables: {
        variable: payload,
      },
    })
  ).then(value => value.data);
};
