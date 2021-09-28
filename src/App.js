import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/header/Header";
import Home from "./components/Home";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/checkout">
            {/* Checkout */}
            <Checkout />
          </Route>
          <Route path="/">
            {/* Header */}

            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
