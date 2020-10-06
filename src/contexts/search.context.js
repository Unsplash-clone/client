import React, { createContext, useReducer } from "react";
import searchReducer from "../reducers/search.reducer";

export const SearchContext = createContext();
export const DispatchSearchContext = createContext();

export function SearchProvider(props) {
  const [term, dispatch] = useReducer(searchReducer, "");

  return (
    <SearchContext.Provider value={term}>
      <DispatchSearchContext.Provider value={dispatch}>
        {props.children}
      </DispatchSearchContext.Provider>
    </SearchContext.Provider>
  );
}
