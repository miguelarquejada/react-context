import { useStateValue } from '../contexts/StateContext'

import Info from './Info'

const Body = props => {
    const context = useStateValue()

    const handleButton = () => {
        props.setUsername('Pedro')
    }

    return (
        <div className={`theme-${context.theme}`}>
            <h1>Body</h1>
            <Info />
            <button onClick={handleButton}>Mudar nome</button>
        </div>
    )
}

export default Body