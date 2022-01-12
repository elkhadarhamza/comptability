import { createContext, useCallback, useState } from "react"
import deepmerge from "deepmerge"

const AppContext = createContext()

const initialState = {
    totalIn : 0,
    totalOut : 0,
    data : []
}

export const AppContextProvider = (props) => {
    const [state, setState] = useState(initialState)
    const addEntry = useCallback((entry) => {
        setState((currentState) =>
            deepmerge(currentState, {
                data : [{type:entry.type, amount: entry.amount, description: entry.description}],
                totalIn : currentState.totalIn + (entry.type === "in" ? +entry.amount : 0),
                totalOut : currentState.totalOut + (entry.type === "out" ? +entry.amount : 0)
                }
            )
        )
      }, [])

return (
        <AppContext.Provider {...props} value={{ state , addEntry}} />
    )
}
export default AppContext