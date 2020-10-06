import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import tokenReducer from "../reducers/token.reducer";

export const TokenContext = createContext();
export const DispatchTokenContext = createContext();

export function TokenProvider(props) {
  const [token, dispatch] = useLocalStorageReducer("token", null, tokenReducer);

  return (
    <TokenContext.Provider value={token}>
      <DispatchTokenContext.Provider value={dispatch}>
        {props.children}
      </DispatchTokenContext.Provider>
    </TokenContext.Provider>
  );
}
