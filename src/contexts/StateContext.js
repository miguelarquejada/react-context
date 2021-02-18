import { createContext, useContext, useReducer } from 'react'

const initialState = {
    theme: 'light',
    user: {
        name: 'Miguel',
        email: 'miguel@gmail.com'
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'setTheme':
            return {...state, theme: action.payload.theme}
            break
        case 'setName':
            let newUserName = {...state.user}
            newUserName.name = action.payload.name

            return {...state, user: newUserName}
            break
        case 'setEmail':
            let newUserEmail = {...state.user}
            newUserEmail.name = action.payload.name

            return {...state, email: newUserEmail}
            break
    }

    return state
}

export const StateContext = createContext()
export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)