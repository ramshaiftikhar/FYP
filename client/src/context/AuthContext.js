import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
const initialState = {
  loggedIn: false,
  email: null,
  username: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, loggedIn: true, email: action.payload.email };
    case "logout":
      return { ...state, loggedIn: false, email: null };
  }
}
export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("/user/").then((response) => {
      if (response.data.user) {
        dispatch({
          type: "login",
          payload: { email: response.data.user.email },
        });
      } else {
        dispatch({ type: "logout" });
      }
    });
  }, []);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const state = useContext(AuthStateContext);
  return state;
};
export const useDispatch = () => {
  const dispatch = useContext(AuthDispatchContext);
  return dispatch;
};
export const useStore = () => {
  const state = useContext(AuthStateContext);
  const dispatch = useContext(AuthDispatchContext);
  return [state, dispatch];
};
export default AuthContextProvider;
