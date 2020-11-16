import React, { useContext, useState } from 'react';
import { login } from "../../helpers/apiCalls/authentication";
import authContext from "../../helpers/authContext";
import styles from './styles.scss'

const Login = () => {
  const { setAuthenticated, authenticated } = useContext(authContext);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const logo = require('../../dist/img/docs/logo.svg').default;

  const submitLogin = async (e) => {
    e.preventDefault();
    const loggedIn = await login(identifier, password);
    setAuthenticated(loggedIn.success)
    if (loggedIn.success) {
      window.location.href = "/"
    } else {
      setError(loggedIn.message)
    }
  };

  return (<div className={styles.outerContainer}>

    <div className={styles.logoContainer}><img src={logo} alt="vf-logo" /></div>
    <div className={styles.innerContainer}>
      <div className={styles.inputContainer}>
        <div>Username or email</div>
        <input type="text"
               id="username"
               value={identifier}
               onChange={(e) => setIdentifier(e.target.value)} />
      </div>
      <div className={styles.inputContainer}>
        <div>Password</div>
        <input type="password"
               id="username"
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className={styles.bottomContainer}>

        <button onClick={submitLogin} type="submit">Login</button>

      </div>
      <span className={styles.error}>
        {error && error}
      </span>

    </div>


  </div>);


};

export default Login;
