// enlist-disable-next-line

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// context
import { useStateValue } from "./store/StateProvider";
// firebase
import { auth } from "./firebase/firebase";
// css
import "./App.css";

// Components
import Header from "./components/header/Header";
import Home from "./pages/homepage/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./pages/login/Login";

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("current user logged in is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* Login */}
            <Login />
          </Route>
          <Route path="/checkout">
            {/* Checkout */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            {/* Home */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
