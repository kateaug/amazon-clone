import React, { createContext, useContext, useReducer } from 'react';

// Data Layer
export const StateContext = createContext();

// Buiild a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Usage in component 
export const useStateValue = () => useContext(StateContext);