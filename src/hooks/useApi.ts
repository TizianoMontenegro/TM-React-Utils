import { useCallback, useEffect, useState } from "react";
import { apiCallResult } from "../utilities";

type useApiOptions = {
    autoFetch?: boolean;
}

type DataType<T> = T | null;
type ErrorType = Error | null;

interface useApiResult<T> {
    data: DataType<T>;
    loading: boolean;
    error: ErrorType;
    fetchData: () => void;
}

export const useApi = <T,>(apiCall: apiCallResult<T>, options?: useApiOptions): useApiResult<T> => {
    const [data, setData] = useState<DataType<T>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const fetchData = useCallback(() => {
        const { call, controller } = apiCall;
        setLoading(true);
        call.then(res => {
            setData(res.data)
            setError(null)
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })

        return () => controller.abort();
    }, [apiCall])
    
    useEffect(() => {
        if (options && options.autoFetch) {
            return fetchData();
        }
    }, [fetchData, options])

    return { data, loading, error, fetchData };
}