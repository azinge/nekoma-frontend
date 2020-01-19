import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faCoffee,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

library.add(faCheck, faTimes, faCoffee, faArrowLeft);

client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `,
  })
  .then(result => console.log(result));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
