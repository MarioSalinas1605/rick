import { useState, useEffect } from "react";
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

    return (
        <h1>Test</h1>
    )
}

export default ListOfCreatures