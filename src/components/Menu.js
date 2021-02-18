import { useStateValue } from '../contexts/StateContext'
import Info from './Info'

const Menu = () => {
    const context = useStateValue()

    return (
        <div className={`theme-${context.theme}`}>
            <h1>Menu</h1>
            <Info />
        </div>
    )
}

export default Menu