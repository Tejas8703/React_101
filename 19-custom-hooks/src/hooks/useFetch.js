import { useEffect, useState } from "react";

export function useFetch(url){
    const [finaldata, setFinalData] = useState({})
    console.log(url)
    async function getDetails() {
        const response = await fetch(url);
        const data = await response.json();
        setFinalData( data);
    }

    useEffect(()=>{
        getDetails()
    },[url])

    return (
        finaldata
    )
} 