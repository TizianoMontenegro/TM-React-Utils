import { useEffect, useState } from "react"

export const PromiseError = () => {
    const [data, setData] = useState<string | null>()


    useEffect(() => {
        const fetchData = async () => {
            try {
                throw new Error('Promise fails')
            } catch (error) {
                if (error instanceof Error) {
                    setData(error.message)
                    throw new Error('Promise fails 2')
                }
            }
        }
        fetchData()
        
    },[])

    return <p>{data}</p>
}