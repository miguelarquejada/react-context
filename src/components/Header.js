import Info from './Info'
import { useStateValue } from '../contexts/StateContext'

import Contagem from './Contagem'

const Header = () => {
    const context  = useStateValue()

    return (
        <div className={`theme-${context.theme}`}>
            <h1>Header</h1>
            <Info />
            <Contagem />
        </div>
    )
}

export default Header