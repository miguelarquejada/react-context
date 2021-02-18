const initialState = 'light'

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setTheme':
            return action.payload.theme
            break
    }

    return state
}