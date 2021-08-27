import { useState, useEffect } from "react";
import Creature from "./Creature.jsx"

function ListOfCreatures() {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setLoading(true)
        setError(null)
        try {
            fetch('https://rickandmortyapi.com/api/character')
                .then(response => response.json())
                .then(data => {
                    setData(data.results)
                    setLoading(false)
                });
            console.log(fetch);
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
        <section className="container-list">
            {data.map(item => (
                <Creature info={item} />
            ))}
        </section>
    )
}

export default ListOfCreatures