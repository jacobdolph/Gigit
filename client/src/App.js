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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path='/loading' exact element={<LOADING />} />
            <Route exact path='/' exact element={<WELCOME />} />
            <Route exact path='/profile' exact element={<Profile />} />
            <Route exact path='/gigs' exact element={<GIGS />} />
            <Route exact path='/gig-setup' exact element={<GIGSETUP />} />
            <Route exact path='/callback' exact element={<HOME />} />
            <Route exact path='/home' exact element={<HOME />} />
            <Route exact path='/signin' exact element={<SIGNUP />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
