function Creature({ info }) {
    return (
        <article>
            <h1>{info.name}</h1>
            <button>Show details</button>
        </article>
    )
}

export default Creature