import { createContext } from "react";
import { checkLoggedIn } from "./apiCalls/authentication";

const AuthContext = createContext({
  authenticated: checkLoggedIn(),
  setAuthenticated: (auth) => {}
});

export default AuthContext;
