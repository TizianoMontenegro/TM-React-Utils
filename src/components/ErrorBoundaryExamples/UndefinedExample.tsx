import { useState } from "react"

export const UndefinedExample = () => {
    const [obj] = useState<{prop?: string}>({})

    return <p>{obj.prop!.length}</p>
}
