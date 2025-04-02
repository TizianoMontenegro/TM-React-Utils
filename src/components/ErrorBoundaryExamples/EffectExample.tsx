import { useEffect } from "react";

export const EffectExample = () => {
    useEffect(() => {
        throw new Error('Sn error in th use effect')
    },[])

    return <p>useEffect</p>
}
