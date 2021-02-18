import { useState } from 'react'
import { useStateValue } from '../contexts/StateContext'

import Info from './Info'

const Body = () => {
    const [name, setName] = useState('Miguel')
    const [state, dispatch] = useStateValue()

    const handleButton = () => {
        dispatch({
            type: 'setName',
            payload: {
                name: name
            }
        })
    }

    return (
        <div className={`theme-${state.theme}`}>
            <h1>Body</h1>
            <Info />
            <input type="text" onChange={e => setName(e.target.value)} value={name}/>
            <button onClick={handleButton}>Mudar nome</button>
        </div>
    )
}

export default Body