// objetivo: permite crear un referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re - render
// objetivo 2: hacer referencia a un elemento del DOM   

import { useRef, useState } from "react"


export function BookReader() {
    const currentPageRef = useRef<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const nextPage = () => {
        currentPageRef.current += 1
        console.log('Avanzaste 1 pagina');
    }
    
    const pastPage = () => {
        if (currentPageRef.current === 1) {
            console.log('no podes retroceder mas');
            return;
        } 

        currentPageRef.current -= 1
        console.log('Retrocediste 1 pagina');
    }

    const goToPage = (page:number) => {
        if (currentPageRef.current < 1) {
            console.log('no podes retroceder mas que la pag 1');
            return;
        }

        currentPageRef.current = page
        setCurrentPage(page)
        console.log('Fuiste a la pagina ' + page);
    }

    return (
        <>
            <p>Pagina REF actual: {currentPageRef.current}</p>
            <p>Pagina STATE actual: {currentPage}</p>
            <button onClick={nextPage}>Avanzar</button>
            <button onClick={pastPage}>Retroceder</button>
            <button onClick={() => goToPage(25)}>Ir a pagina 25</button>
            <button onClick={() => goToPage(50)}>Ir a pagina 50</button>
            <button onClick={() => goToPage(75)}>Ir a pagina 75</button>
        </>
    )
}
