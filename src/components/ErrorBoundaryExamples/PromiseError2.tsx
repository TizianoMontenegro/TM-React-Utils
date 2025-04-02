import { useEffect, useState } from "react"

export const PromiseError2 = () => {
    const [data] = useState<string | null>('All right')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                throw new Error('Promise fails')
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                    throw new Error('Promise fails 2')
                }
            }
        }
        fetchData()
        
    },[])

    if (error) {
        throw error
    }
    return <p>{data}</p>
}