import { createContext, useCallback, useEffect, useState } from "react";
import deepmerge from "deepmerge";

const AppContext = createContext();

const initialState = {
    totalIn : 0,
    totalOut : 0,
    data : [
        {
            type: 'in',
            description : 'description',
            amount : 0
        }
    ]
}

export const AppContextProvider = (props) => {
    const [state, setState] = useState(initialState);
    const addEntry = useCallback((entry) => {        
        setState((currentState) =>
            deepmerge(currentState, {
                data : [{type:entry.type, amount: entry.amount, description: entry.description}],
                totalIn : 1,
                totalOut : 2541
                }
            )           
        );
      }, []);
    return (
        <AppContext.Provider {...props} value={{ state , addEntry}} />
    );
};
export default AppContext;