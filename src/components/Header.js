import { useStateValue } from '../contexts/StateContext'

import Contagem from './Contagem'

const Header = () => {
    const [state, dispatch]  = useStateValue()

    const changeTheme = theme => dispatch({
        type: 'setTheme',
        payload: {
            theme: theme
        }
    })

    return (
        <div className={`theme-${state.theme}`}>
            <h1>Header</h1>

            {state.theme == 'light' &&
                <button onClick={() => changeTheme('dark')}>Dark</button>
            }

            {state.theme == 'dark' &&
                <button onClick={() => changeTheme('light')}>Light</button>
            }
            <Contagem />
        </div>
    )
}

export default Header