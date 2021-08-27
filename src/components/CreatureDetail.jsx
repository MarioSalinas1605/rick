import { useState, useEffect } from "react";
function CreatureDetail(props) {
    const idCreature = props.match.params.creatureId

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setLoading(true)
        setError(null)
        try {
            fetch(`https://rickandmortyapi.com/api/character/${idCreature}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                });
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    if (loading === true && !data) {
        return <h1>Loading data...</h1>
    }

    if (error) {
        return <h1>Sorry we have problems</h1>
    }

    return (
        <article>
            <h1>Details of {idCreature}</h1>
        </article>
    )
}

export default CreatureDetail