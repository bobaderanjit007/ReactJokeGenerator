import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const Joke = () => {
    const { data, loading } = useGlobalContext();
    const { joke } = data;
    return (
        <p className="joke" id="joke">
            {loading ? 'Loading...' : joke}
        </p>
    )
}

export default Joke
