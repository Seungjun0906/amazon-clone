import React, { createContext, useContext, useReducer } from "react";

export const ctx = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <ctx.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ctx.Provider>
  );
};

export const useStateValue = () => useContext(ctx);
