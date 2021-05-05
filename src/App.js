import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Layout from "./components/Layout/Layout";
import reducer from "./redux/reducer";
import "./App.css";

const App = () => {
  const store = createStore(reducer, composeWithDevTools());
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <Layout>
            <Router></Router>
          </Layout>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
