import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// firebase
import { db, auth } from "../../firebase/firebase.js";
// css
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    // firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const signUpHandler = (e) => {
    // firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="#" className="login__form">
          <label htmlFor="email" value={email}>
            E-mail
          </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__btn btn-signIn"
            onClick={signInHandler}
          >
            Sign In
          </button>
        </form>
        <p className="login__condition">
          By signing-in you agree to FAKE AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__btn btn-signUp" onClick={signUpHandler}>
          Sing up today!
        </button>
      </div>
    </div>
  );
}

export default Login;
