import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
