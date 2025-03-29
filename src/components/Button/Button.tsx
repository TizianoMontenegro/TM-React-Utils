import { ReactNode } from "react"
import { useGlobalContext } from "../../context/global.context"

interface Params {
    children: ReactNode
}

export function Button({children}:Params) {
    const { value, setValue } = useGlobalContext()

    const handleClick = () => {
        setValue(value as number + 1)
    }

    return (<button onClick={handleClick}>{value} - { children }</button>)
}