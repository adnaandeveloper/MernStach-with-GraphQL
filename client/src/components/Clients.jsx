import React from 'react';
import { gql, useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientsQueries';
import Spinner from './Spinner';

/**
 *  Moved this code to its own file best practic 
 const GET_CLIENTS = gql`
 query getClients {
   clients {
     id
     name
     email
     phone
    }
  }
  `;
  */

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  console.log(data.clients.length);

  return (
    <>
      {!loading && !error && data.clients.length ? (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th> name</th>
              <th> email</th>
              <th> phone </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <h5>No clients created yet</h5>
      )}
    </>
  );
}
