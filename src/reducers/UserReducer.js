const initialState = {
    name: 'Miguel',
    email: 'miguel@gmail.com'
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setName':
            return {...state, name: action.payload.name}
            break
        case 'setEmail':
            return {...state, email: action.payload.email}
            break
    }

    return state
}