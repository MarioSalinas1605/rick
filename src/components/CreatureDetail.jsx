function CreatureDetail(props) {
    const idCreature = props.match.params.creatureId
    return (
        <article>
            <h1>Details of {idCreature}</h1>
        </article>
    )
}

export default CreatureDetail