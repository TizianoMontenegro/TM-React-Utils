import { useRef } from "react";

export function InputRef() {
    const inputElementRef = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        if (!inputElementRef) {
            console.log('no existe input');
            return;
        }
        inputElementRef.current?.focus()
    }

    return (<>
        <input ref={inputElementRef} type="text" />
        <button onClick={focusInput}>focusear input</button>
    </>)
}