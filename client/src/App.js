import React from "react";
import SIGNUP from "./pages/Login";
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
import { setContext } from "@apollo/client/link/context";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Route exact path='/'>
              <WELCOME />
            </Route>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/gigs' component={GIGS} />
            <Route exact path='/gig-setup' component={GIGSETUP} />
            <Route exact path='/callback' component={HOME} />
            <Route exact path='/home' component={HOME} />
            <Route exact path='/signin' component={SIGNUP} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
