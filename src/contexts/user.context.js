import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import userReducer from "../reducers/user.reducer";

export const UserContext = createContext();
export const DispatchUserContext = createContext();

export function UserProvider(props) {
  const [user, dispatch] = useLocalStorageReducer(
    "user_token",
    null,
    userReducer
  );

  return (
    <UserContext.Provider value={user}>
      <DispatchUserContext.Provider value={dispatch}>
        {props.children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}
