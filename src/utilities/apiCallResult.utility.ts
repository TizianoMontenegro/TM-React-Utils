import { AxiosResponse } from "axios";

export interface apiCallResult<T> {
    call: Promise<AxiosResponse<T>>;
    controller: AbortController;
}