// Hold Global state
import React, { useState } from 'react';

const initialState = {
    cats: [],
    dogs: [],
    people: [],
    currentUser: '',
    adopting: false,
    error: null
};

// creates Context
export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default Store;

