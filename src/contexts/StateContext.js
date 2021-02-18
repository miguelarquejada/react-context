import { createContext, useContext } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ children, value }) => (
    <StateContext.Provider value={value}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)