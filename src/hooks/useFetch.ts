import { useEffect, useState } from "react";

type DataP<T> = T | null;
type ErrorP = Error | null;

interface Params<T> {
    data: DataP<T>;
    loading: boolean;
    error: ErrorP;
};

export const useFetch = <T>(url: string): Params<T> =>{
    const [data, setData] = useState<DataP<T>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorP>(null);

    const fetchData = async (controller: AbortController) => {
        setLoading(true);
        try {
            const response = await fetch(url, controller);
            
            if (!response.ok) {
                throw new Error('Error fetching data');
            }

            const newData: T = await response.json();
            setData(newData);
            setError(null);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        const controller = new AbortController();

        fetchData(controller);

        return () => {
            controller.abort();
        }
    },[url]);

    return {data, loading, error};
};