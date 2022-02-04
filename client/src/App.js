import React from "react";
import GIGS from "./pages/Gigs";
import GIGSETUP from "./pages/GigSetup";
import WELCOME from "./pages/Welcome";
import HOME from "./pages/Home";
import Loading from "./components/Loading/Loading";
import LOADING from "./pages/Loading";
import Header from "./components/Header";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/loading' component={LOADING} />
            <Route exact path='/' component={WELCOME} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/gigs' component={GIGS} />
            <Route exact path='/gig-setup' component={GIGSETUP} />
            <Route exact path='/callback' component={HOME} />
            <Route exact path='/home' component={HOME} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
