import React from 'react'
import { useGlobalContext } from '../context/ContextApi'
import Loader from './Loader';

const Button = () => {

    const { getJoke , loading } = useGlobalContext();

    return (
        <button onClick={getJoke} className="btn" id="btn">
            {loading ? <Loader /> : 'Tell me a joke'}
        </button>
    )
}

export default Button
