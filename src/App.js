import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Router>
            <Layout>
              <Switch>
                <Route path="/" />
              </Switch>
            </Layout>
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
