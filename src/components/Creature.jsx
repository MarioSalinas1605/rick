import { Link } from 'react-router-dom'

function Creature({ info }) {
    return (
        <article>
            <h1>{info.name}</h1>
            <Link to={`/creatures/${info.id}`}>
                Show details
            </Link>
        </article>
    )
}

export default Creature