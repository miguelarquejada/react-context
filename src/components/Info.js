import { useStateValue } from '../contexts/StateContext'

const Info = () => {
    const context = useStateValue()

    return (
        <button>{context.user.name} - {context.theme}</button>
    )
}

export default Info