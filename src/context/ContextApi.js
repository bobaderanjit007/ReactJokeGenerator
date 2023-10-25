import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const apikey = "LClA8l0MpIFuifDHlLzDew==3NW6AMBImNcauxMn";
    const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apikey,
        },
    };

    async function getJoke() {
        try {
            setLoading(true)
            const res = await axios.get(apiURL, options);
            setData(res.data[0])
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(true)
        }
    }

    useEffect(()=>{
        getJoke()
        // eslint-disable-next-line
    },[])




    return (
        <AppContext.Provider value={{ data, getJoke, loading}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }