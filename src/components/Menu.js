import { useStateValue } from '../contexts/StateContext'
import Info from './Info'

const Menu = () => {
    const [state, dispatch] = useStateValue()

    return (
        <div className={`theme-${state.theme}`}>
            <h1>Menu</h1>
            <Info />
        </div>
    )
}

export default Menu