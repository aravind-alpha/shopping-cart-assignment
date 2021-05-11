import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/reducer";
import Layout from "./components/Layout/Layout";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const store = createStore(reducer, composeWithDevTools());
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Layout />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
