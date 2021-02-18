import { useStateValue } from '../contexts/StateContext'

const Info = () => {
    const [state, dispatch] = useStateValue()

    return (
        <button>{state.user.name} - {state.theme}</button>
    )
}

export default Info