import { useEffect, useRef } from "react"


export const usePrev = (value) =>{
    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value])

    return ref.current

}
//returns first , effect is called later (react property)