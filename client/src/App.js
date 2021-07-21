import React from "react";
import { Router, Route, Switch } from 'react-router-dom'; 
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';

// history
import history from './config/history';

// bring in pages
import Home from "./pages/Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
