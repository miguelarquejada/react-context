import { useReducer } from 'react'

const initialState = {
    contagem: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, contagem: state.contagem+1}
            break
        case 'decrement':
            return {...state, contagem: state.contagem-1}
            break
        case 'double':
            return {...state, contagem: state.contagem*2}
            break
        case 'set':
            return {...state, contagem: action.payload.novaContagem}
            break
    }

    return state
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <span>{state.contagem}</span>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'double'})}>dobrar</button>
            <button onClick={() => dispatch({
                type: 'set',
                payload: {
                    novaContagem: 0
                }
            })}>zerar</button>
        </div>
    )
}